var webGrupofz = angular.module('navegacion', ['ngRoute']);

webGrupofz.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'plantillas/home.html',
		controller: 'inicio'
	})
	.when('/nosotros', {
		templateUrl: 'plantillas/nosotros.html',
		controller: 'nosotros'
	})
	.when('/noticias', {
		templateUrl: 'plantillas/noticias.html',
		controller: 'noticias'
	})
	.when('/galeria', {
		templateUrl: 'plantillas/galeria.html',
		controller: 'galeria'
	})
	.when('/empleo', {
		templateUrl: 'plantillas/empleo.html',
		controller: 'empleo'
	})
	.when('/contacto', {
		templateUrl: 'plantillas/contacto.html',
		controller: 'contacto'
	})
	.when('/registrate', {
		templateUrl: 'plantillas/registracion.html',
		controller: 'registrate'
	})
	.when('/404', {
		templateUrl: 'plantillas/404.html',
		controller: 'fail'
	})
	.otherwise({
			redirectTo:'/'
	})
}]);