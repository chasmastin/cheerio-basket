'use strict'

require('dotenv').config({path:__dirname+"/../../../.env", silent: true});

const JsonPatch = require('json-patch');

exports.register = function (server, options, next) {
    var backstage = {
        state: 'blank'
    };
    var io = server.plugins['hapi-io'].io;
    var nsp
    if (io) {
        nsp = io.of('/backstage');
    }
    server.route({
        method: 'GET',
        path: '/api/backstage',
        handler: function (request, reply) {
            return reply(backstage);
        }
    });

    server.route({
        method: 'GET',
        path: '/api/backstage/',
        handler: function (request, reply) {
            return reply.redirect('/api/backstage');
        }
    });

    server.route({
        method: 'PATCH',
        path: '/api/backstage',
        handler: function (request, reply) {
            JsonPatch.apply(
                backstage,
                request.payload
            );

            if (nsp) {
                nsp.emit('update', backstage);
            }
            return reply(backstage);
        }
    });

    next();
}

exports.register.attributes = {
    name: require('path').basename(__filename),
    version: '1.0.0'
};
