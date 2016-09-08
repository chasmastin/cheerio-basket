'use strict';

require('dotenv').config({path:"../../../.env", silent: true});

exports.register = function (server, options, next) {
	server.route({
	    method: 'GET',
	    path:'/env', 
	    handler: function (request, reply) {
	        return reply({
	            OXFORD_SPEECH_API_KEY : process.env.OXFORD_SPEECH_API_KEY,
	            BOT_URL: process.env.BOT_URL ?  process.env.BOT_URL : "/bot/messages",
	            BOT_APP_ID: process.env.BOT_APP_ID,
	            BOT_APP_SECRET:  process.env.BOT_APP_SECRET,
	            API_URL: process.env.API_URL ? process.env.API_URL : "/api"
	        });
	    }
	});

    next();
};

exports.register.attributes = {
    name: require('path').basename(__filename),
    version: '1.0.0'
};
