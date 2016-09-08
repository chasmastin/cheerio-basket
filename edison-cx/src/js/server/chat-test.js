'use strict'

require('dotenv').config({path:"../../../.env", silent: true});

exports.register = function (server, options, next) {
	server.dependency('hapi-io', function (server, next) {
		server.on('start', function() {
			var io = server.plugins['hapi-io'].io;
			io.sockets.on('connection', function (socket){
				var name = "";

	            console.log('a user connected'); 
	            io.sockets.emit();

	            socket.on("nickname", function(nickname){
	                name = nickname;
	                console.log(name);
	                io.sockets.emit('new chatter', name);
	                socket.broadcast.emit('chat message', name + " has joined the chat.");
	            })

	            socket.on('disconnect', function(){
	                console.log('user disconected');
	            });

	            socket.on('chat message', function(nickname, msg){
	                socket.broadcast.emit('chat message', nickname + ' says: ' + msg);
	                console.log( nickname + ' says: ' + msg);
	            });
	        });
		});
	    next();
	});
	next();
};

exports.register.attributes = {
    name: require('path').basename(__filename),
    version: '1.0.0'
};