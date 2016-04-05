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
		.module('catalogApp.order', [
			'ngResource',
			'ui.router'
		])
		.config(configOrderRoutes);

	// inject configProductRoutes dependencies
	configOrderRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];

	/**
	 * Route configuration function configuring the passed $stateProvider.
	 * Register the abstract product state with the product template
	 * paired with the ProductController as 'index'.
	 * The injectable 'products' is resolved as a list of all products
	 * and can be injected in all sub controllers.
	 *
	 * @param {$stateProvider} $stateProvider - The state provider to configure
	 */
	function configOrderRoutes($urlRouterProvider, $stateProvider) {
		// The product state configuration
		var orderState = {
			name: 'order',
			url: '/history',
			templateUrl: 'app/orders/order.html',
			controller: 'OrderController',
			controllerAs: 'orderCtrl',
            resolve: {
                orders: resolveorders
                //products: resolveProducts

            }
		};

		//$urlRouterProvider.when('/history', '/order/');
		$stateProvider.state(orderState);
		console.log(orderState);
	}
    
    resolveorders.$inject = ['Product', '$log'];
    
    function resolveorders(Product, $log) {

         return Product.getOrders({id:'orderList', controller:'123456'}, function(response){
            $log.debug('configOrderRoutes::resolveorders::respone ='+angular.toJson(response,true));
                            return response;
                        }).$promise;
         // .then(function(results){
         //   console.log(results);
         //   return results;
       // });   
}

    // inject resolveProductFromArray dependencies
	//resolveProducts.$inject = ['Product'];

	/**
	 * Resolve dependencies for the product.detail state
	 *
	 * @params {Array} products - The array of products
	 * @params {Object} $stateParams - The $stateParams to read the product id from
	 * @returns {Object|null} The product whose value of the _id property equals $stateParams._id
	 */
	// function resolveProducts(Product) {
 //        return Product.getProducts.query().$promise.then(function(results) {
 //        	console.log(results);
 //        	return results;
 //        });
 //    }
})();
