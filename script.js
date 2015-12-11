var app = angular.module('myModule', ['ng-route']);

app.config($routeProvider){
	$routeProvider.when('/',
		templateurl: 'index.html',
		controller: 'myControl'
});

$routeProvider.when('/view1',
	templateurl: 'view1.html',
	controller: 'myControl'
});
