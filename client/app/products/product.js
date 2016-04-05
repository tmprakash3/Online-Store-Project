(function () {
	'use strict';

	/**
	 * Introduce the catalogApp.product module
	 * and configure it.
	 *
	 * @requires ui.router
	 * @requires ngResource
	 * @requires catalogApp.product.main
	 * @requires catalogApp.product.list
	 * @requires catalogApp.product.create
	 */
	angular
		.module('catalogApp.product', [
			'ngResource',
			'ui.router',
			'catalogApp.product.main',
			'catalogApp.product.list',
			'catalogApp.product.create'
		])
		.config(configProductRoutes);

	// inject configProductRoutes dependencies
	configProductRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];

	/**
	 * Route configuration function configuring the passed $stateProvider.
	 * Register the abstract product state with the product template
	 * paired with the ProductController as 'index'.
	 * The injectable 'products' is resolved as a list of all products
	 * and can be injected in all sub controllers.
	 *
	 * @param {$stateProvider} $stateProvider - The state provider to configure
	 */
	function configProductRoutes($urlRouterProvider, $stateProvider) {
		// The product state configuration
		var productState = {
			name: 'product',
			url: '/products',
			templateUrl: 'app/products/product.html',
			controller: 'ProductController',
			controllerAs: 'vm'
		};

		$urlRouterProvider.when('/product', '/product/');
		$stateProvider.state(productState);
	}
})();
