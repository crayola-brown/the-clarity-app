var app = angular.module('myModule', ['ng-route']);

app.config($routeProvider){
	$routeProvider.when('/',
		templateurl: 'landing.html',
		controller: 'myControl'
});

$routeProvider.when('/home',
	templateurl: 'index.html',
	controller: 'myControl'
});
