var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/',
	{
		templateUrl: 'landing.html',
		controller: 'myControl'
	})
	
	.when('/home', 
	{
		templateUrl: 'index.html',
		controller: 'myControl'
	});
});
