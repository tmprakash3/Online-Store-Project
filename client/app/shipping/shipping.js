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
		.module('catalogApp.shipping', [
			'ngResource',
			'ui.router'
		])
		.config(configShippingRoutes);

	// inject configProductRoutes dependencies
	configShippingRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];

	/**
	 * Route configuration function configuring the passed $stateProvider.
	 * Register the abstract product state with the product template
	 * paired with the ProductController as 'index'.
	 * The injectable 'products' is resolved as a list of all products
	 * and can be injected in all sub controllers.
	 *
	 * @param {$stateProvider} $stateProvider - The state provider to configure
	 */
	function configShippingRoutes($urlRouterProvider, $stateProvider) {
		// The product state configuration
		var shipmentState = {
			name: 'shipment',
			url: '/shipment',
			templateUrl: 'app/shipping/shipping.html',
			controller: 'ShippingController',
			controllerAs: 'ship',
            resolve: {
                orders: resolveorders
            }
		};

		$urlRouterProvider.when('/shipping', '/shipping/');
		$stateProvider.state(shipmentState);
	}
    
    resolveorders.$inject = [];
    
    function resolveorders() {
         // return Product.getOrders.query().$promise;
//            .then(function(results){
//            console.log(results);
//            return results;
//        });   
    }
})();
