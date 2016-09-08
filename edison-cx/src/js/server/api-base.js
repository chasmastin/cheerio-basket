'use strict';

const Hapi = require('hapi');

function createServer(options) {
    var server;

    if (!options) {
        options = {};
    }
    if (!options.origin) {
        options.origin = ['*'];
    }
    if (!options.connection) {
        options.connection = {
            labels: ['http'],
            address: '0.0.0.0',
            port: 80
        }
    }
    if (!options.register) {
        options.register = function(server) { return; }
    }

    server = new Hapi.Server({
        connections: {
            routes: {
                cors: {
                    origin: options.origin
                },
            }
        }
    });
    server.connection(options.connection);
    server.register({register: require('hapi-io')}, function(err) {
        if (err) {
            console.error('Failed to load a plugin:', err);
        }
        options.register(server);
    });

    return server;
}

module.exports = {
    'createServer' : createServer,
};