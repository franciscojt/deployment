"use strict"
var path = require('path');

var appointments = require('./../controllers/appointments.js');

module.exports = function(app){
	console.log('routes loaded');
	
	app.get('/appointments', appointments.load);
	app.post('/appointment', appointments.create);
	app.delete('/appointments/:id', appointments.delete);
};