'use strict';

require('dotenv').config({path: __dirname+"/../.env"});

describe("Signage API", function () {
	var server = require('../src/js/server/api-base.js').createServer({
		register: function(server) {
			server.register({register: require('../src/js/server/api.js')});
		}
	});

	beforeEach(function(done) {
	    server.inject({
			method: "DELETE",
			url: "/api/cart"
		}, done );
	});

	it ("should return products", function (done) {
		server.inject({
			method: "GET",
			url: "/api/signage"
		}, function(response) {
			expect(Array.isArray(response.result)).toBe(true);
			expect(response.result.length).toBeGreaterThan(0);
			expect(typeof response.result[0]).toBe('object');
			expect(typeof response.result[0].largeImage).toBe('string');
			expect(typeof response.result[0].salePrice).toBe('number');
			done();
		});
	});

	it ("should return different products after updating the cart", function (done) {
		server.inject({
			method: "GET",
			url: "/api/signage"
		}, function(response) {
			var initial_result = response.result;
			
			server.inject({
				method: "PATCH",
				url: "/api/cart",
				payload: [
					{ "op": "add", "path": "/items/-", "value": { 'itemId' : 42206183 } },
				]
			}, function(response) {
				server.inject({
					method: "GET",
					url: "/api/signage"
				}, function(response) {
					expect(response.result[0].largeImage).not.toBe(initial_result[0].largeImage);
					expect(Array.isArray(response.result)).toBe(true);
					expect(response.result.length).toBeGreaterThan(0);
					expect(typeof response.result[0]).toBe('object');
					expect(typeof response.result[0].largeImage).toBe('string');
					expect(typeof response.result[0].salePrice).toBe('number');
					done();
				});
			});
		});
	});

	// it ("should add to the cart", function (done) {
	// 	server.inject({
	// 		method: "PATCH",
	// 		url: "/api/cart",
	// 		payload: [
	// 			{ "op": "add", "path": "/items/-", "value": { 'sku' : 1234567890 } },
	// 		]
	// 	}, function(response) {
	// 		expect(response.statusCode).toBe(200);
	// 		expect(response.result).toEqual(jasmine.objectContaining({
	// 			items: [{ 'sku' : 1234567890 }]
	// 		}));

	// 		done();
	// 	});
	// });
	// it ("should remember changes to the cart", function (done) {
	// 	server.inject({
	// 		method: "PATCH",
	// 		url: "/api/cart",
	// 		payload: [
	// 			{ "op": "add", "path": "/items/-", "value": { 'sku' : 1234567890 } },
	// 		]
	// 	}, function(response) {
	// 		server.inject(
	// 			{
	// 				method: "GET",
	// 				url: "/api/cart"
	// 			},
	// 			function(response) {
	// 				expect(response.statusCode).toBe(200);
	// 				expect(response.result).toEqual(jasmine.objectContaining({
	// 					items: [{ 'sku' : 1234567890 }]
	// 				}));
	// 				done();
	// 			}
	// 		);
	// 	});
	// });
	// it ("should be able to remove an item", function(done) {
	// 	server.inject({
	// 		method: "PATCH",
	// 		url: "/api/cart",
	// 		payload: [
	// 			{ "op": "add", "path": "/items", "value": [{ 'sku' : 1234567890 }, { 'sku' : 9876543210 }] },
	// 		]
	// 	}, function(response) {
	// 		server.inject({
	// 			method: "PATCH",
	// 			url: "/api/cart",
	// 			payload: [
	// 				{ "op": "remove", "path": "/items/1" },
	// 			]
	// 		}, function() {
	// 			server.inject({
	// 				method: "GET",
	// 				url: "/api/cart"
	// 			}, function(response) {
	// 				expect(response.statusCode).toBe(200);
	// 				expect(response.result).toEqual(jasmine.objectContaining({
	// 					items: [{ 'sku' : 1234567890 }]
	// 				}));
	// 				done();
	// 			});
	// 		});
	// 	});

	// });
	// it ("should delete the cart", function (done) {
	// 	server.inject({
	// 		method: "PATCH",
	// 		url: "/api/cart",
	// 		payload: [
	// 			{ "op": "add", "path": "/items/-", "value": { 'sku' : 1234567890 } },
	// 		]
	// 	}, function(response) {
	// 		server.inject({
	// 			method: "DELETE",
	// 			url: "/api/cart"
	// 		}, function() {
	// 			server.inject({
	// 				method: "GET",
	// 				url: "/api/cart"
	// 			}, function(response) {
	// 				expect(response.statusCode).toBe(200);
	// 				expect(response.result).toEqual(jasmine.objectContaining({
	// 					items: []
	// 				}));
	// 				done();
	// 			});
	// 		});
	// 	});
	// });
});
