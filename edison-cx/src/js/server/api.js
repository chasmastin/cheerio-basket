'use strict';

require('dotenv').config({path:"../.env", silent: true});

const fs = require('fs');
const ApiBase = require('./api-base.js');
const JsonPatch = require('json-patch');
const Walmart = require('walmart')(process.env.WALMARTLABS_API_KEY);

exports.register = function (server, options, next) {
    var cart = {items:[]};
    var related = [];
    var trending = [];

    server.route({
        method: 'GET',
        path:'/api',
        handler: function (request, reply) {
            return reply({ hello: "world" });
        }
    });

    server.route({
        method: 'GET',
        path: '/api/cart',
        handler: function (request, reply) {
            return reply(cart);
        }
    });

    server.route({
        method: 'PATCH',
        path: '/api/cart',
        handler: function (request, reply) {
            related = [];
            JsonPatch.apply(
                cart,
                request.payload
            );
            return reply(cart);
        }
    });

    server.route({
        method: 'DELETE',
        path: '/api/cart',
        handler: function (request, reply) {
            related = [];
            cart = {items:[]};
            return reply(cart);
        }
    });

    server.route({
        method: 'GET',
        path: '/api/signage',
        handler: function (request, reply) {
            if (cart.items.length > 0 &&
                cart.items[cart.items.length-1].itemId) {
                if (related.length > 0) {
                    reply(related);
                } else {
                    Walmart.recommendations(cart.items[cart.items.length-1].itemId)
                    .then(function(result) {
                        related = result;
                        reply(related);
                    });
                }
            } else {
                if (trending.length > 0) {
                    reply(trending);
                } else {
                    Walmart.feeds.trending().then(function(result) {
                        trending = result.items;
                        reply(trending);
                    });
                }
            }
        }
    });

    next();
};

exports.register.attributes = {
    name: require('path').basename(__filename),
    version: '1.0.0'
};
