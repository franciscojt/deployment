"use strict"
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {

	$routeProvider
	.when('/',{
		templateUrl: './partials/index.html',
		controller: 'userController',		
	})	

	.when('/new',{
		templateUrl: './partials/new.html',
		controller: 'appointmentController'
	})
	
	.when('/appointment', {
		templateUrl: './partials/appointment.html',
		controller: 'userController'
	})
	
	.otherwise({
		redirecTo: '/'
	});
});
