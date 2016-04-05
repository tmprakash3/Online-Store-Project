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
		.module('catalogApp.cart', [
			'ngResource',
			'ui.router'
		])
		.config(configCartRoutes);

	// inject configProductRoutes dependencies
	configCartRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];

	/**
	 * Route configuration function configuring the passed $stateProvider.
	 * Register the abstract product state with the product template
	 * paired with the ProductController as 'index'.
	 * The injectable 'products' is resolved as a list of all products
	 * and can be injected in all sub controllers.
	 *
	 * @param {$stateProvider} $stateProvider - The state provider to configure
	 */
	function configCartRoutes($urlRouterProvider, $stateProvider) {
		// The product state configuration
		var cartState = {
			name: 'cart',
			url: '/viewCart',
			templateUrl: 'app/carts/cart.html',
			controller: 'CartController',
			controllerAs: 'cart',
            resolve: {
                carts: resolvecarts
            }
		};

		$urlRouterProvider.when('/cart', '/cart/');
		$stateProvider.state(cartState);
	}
    
    resolvecarts.$inject = ['Product', '$log'];
    
    function resolvecarts(Product, $log) {
        return Product.getCartItems({id:'cart', controller:'123456'}, function(response){
            $log.debug('configCartRoutes::resolvecarts::respone ='+angular.toJson(response,true));
                            return response;
                        }).$promise;
    }
    
   
})();
