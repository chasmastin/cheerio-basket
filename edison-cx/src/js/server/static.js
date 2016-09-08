'use strict'

require('dotenv').config({path:"../../.env", silent: true});

exports.register = function (server, options, next) {
	server.register({register: require('inert')});

	['ux-personal'].forEach(function (uxModule) {
		server.route({
		    method: 'GET',
		    path: '/'+uxModule+'/{param*}',
		    handler: {
		        directory: {
		            path: __dirname+'/../../../'+uxModule+'/www/',
		            redirectToSlash: true,
		            index: true
		        }
		    }
		});
	});

	server.route({
	    method: 'GET',
	    path: '/{param*}',
	    handler: {
	        directory: {
	            path: __dirname+'/../../../www',
	            redirectToSlash: true,
	            index: true
	        }
	    }
	});

	server.route({
	    method: 'GET',
	    path: '/ux-backstage/',
	    handler: function (request, reply) {
	        return reply.redirect('/');
	    }
	});

    next();
};

exports.register.attributes = {
    name: require('path').basename(__filename),
    version: '1.0.0'
};