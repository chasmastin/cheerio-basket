'use strict';

require('dotenv').config({path:"../.env", silent: true});

const VERSION = require('./package.json').version;
const NAME = require('./package.json').name;

const fs = require('fs');
const Path = require('path');
const ApiBase = require('./src/js/server/api-base.js');

var registerPlugins = function(server) {
    server.register({register: require('./src/js/server/api.js')});
    server.register({register: require('./src/js/server/api-backstage.js')});
    server.register({register: require('./src/js/server/env.js')});
    server.register({register: require('./src/js/server/static.js')});
    server.register({register: require('./src/js/server/chat-test.js')});
};

// start HTTP
var http = ApiBase.createServer({
    connection: {
        labels: ['http'],
        address: '0.0.0.0',
        port: 8000
    },
    register: registerPlugins
})
http.start(function(err) {
    if (err) {
        throw err;
    }
    http.connections.forEach(function(connection) {
        console.log(NAME, 'listening:', connection.info.uri);
    });
});
// end HTTP

// start SSL (maybe)
if (process.env.SSL_KEY_FILE && process.env.SSL_CERT_FILE) {
    var ssl = ApiBase.createServer({
        connection: {
            labels: ['https'],
            address: '0.0.0.0',
            port: 8443,
            tls: {
                key: fs.readFileSync(process.env.SSL_KEY_FILE),
                cert: fs.readFileSync(process.env.SSL_CERT_FILE)
            }
        },
        register: registerPlugins
    });
    ssl.start(function(err) {
        if (err) {
            throw err;
        }
        ssl.connections.forEach(function(connection) {
            console.log(NAME, 'listening:', connection.info.uri);
        });
    });
}
// end SSL (maybe)
