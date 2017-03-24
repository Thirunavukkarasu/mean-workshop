angular.module('MovieApp',[
	'ui.router',
	'home',
	'about',
	'services'
])
.config(function($stateProvider){
	$stateProvider
	.state({
		name        : 'home',
		url         : '/home',
		templateUrl : 'app/home/home.tpl.html',
		controller  : 'HomeController',
		controllerAs : 'vm'
	})
	.state({
		name         : 'about',
		url          : '/about',
		templateUrl  : 'app/about/about.tpl.html',
		controller   : 'AboutController',
		controllerAs : 'vm'
	})
	.state({
		name        : 'about.detail',
		url         : '/{detailId}',
		templateUrl : 'app/about/aboutdetail.tpl.html',
		controller  : 'AboutDetailController',
		controllerAs : 'vm'
	})	
	.state({
		name        : 'services',
		url         : '/services',
		templateUrl : 'app/services/services.tpl.html',
		controller  : 'ServicesController',
		controllerAs : 'vm'		
	});
});