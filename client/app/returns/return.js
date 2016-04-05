(function () {
	'use strict';

	/**
	 * Introduce the catalogApp.product module
	 * and configure it.
	 *
	 * @requires ui.router
	 * @requires ngResource
	 * @requires catalogApp.cartmain
	 * @requires catalogApp.cartlist
	 * @requires catalogApp.cartcreate
	 */
	angular
		.module('catalogApp.return', [
			'ngResource',
			'ui.router'
		])
		.config(configReturnRoutes);

	// inject configProductRoutes dependencies
	configReturnRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];

	/**
	 * Route configuration function configuring the passed $stateProvider.
	 * Register the abstract product state with the product template
	 * paired with the ProductController as 'index'.
	 * The injectable 'products' is resolved as a list of all products
	 * and can be injected in all sub controllers.
	 *
	 * @param {$stateProvider} $stateProvider - The state provider to configure
	 */
	function configReturnRoutes($urlRouterProvider, $stateProvider) {
		// The product state configuration
		var returnState = {
			name: 'return',
			url: '/returns',
			templateUrl: 'app/returns/return.html',
			controller: 'ReturnController',
			controllerAs: 'retnCtrl',
            resolve: {
                returns: resolvereturns
            }
		};

		$urlRouterProvider.when('/return', '/return/');
		$stateProvider.state(returnState);
	}
    
    resolvereturns.$inject = ['Product'];
    
    function resolvereturns(Product) {
        return Product.getOrders.query().$promise;
            //.then(function(results){
//            console.log(results);
//            return results;
//        });   
    }
})();
