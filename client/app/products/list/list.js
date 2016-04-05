(function () {
	'use strict';

	/**
	 * Introduce the catalogApp.product.list module
	 * and configure it.
	 * @requires ui.router
	 * @requires ngMaterial
	 * @requires catalogApp.socket
	 * @requires catalogApp.mainMenu,
	 * @requires catalogApp.toggleComponent,
	 * @requires catalogApp.product.list.detail
	 * @requires catalogApp.product.list.edit
	 * @requires catalogApp.product.list.items
	 */

	angular
		.module('catalogApp.product.list', [
			'ngMaterial',
			'ui.router',
			'catalogApp.mainMenu',
			'catalogApp.toggleComponent',
			'catalogApp.product.list.detail',
			'catalogApp.product.list.edit',
			'catalogApp.product.list.items'
		])
		.config(configProductListRoutes);

	// inject configProductListRoutes dependencies
	configProductListRoutes.$inject = ['$stateProvider', 'mainMenuProvider'];

	/**
	 * Route configuration function configuring the passed $stateProvider.
	 * Register the product.list state with the list template fpr the
	 * 'main' view paired with the ProductListController as 'list'.
	 *
	 * @param {$stateProvider} $stateProvider - The state provider to configure
	 */
	function configProductListRoutes($stateProvider, mainMenuProvider) {
		// The list state configuration
		var listState = {
			name: 'product.list',
			parent: 'product',
			url: '/list/:searchText',
            resolve: { products:  resolveProducts },
			views: {

				// target the unnamed view in the product state
				'@product': {
					templateUrl: 'app/products/list/list.html',
					controller: 'ProductListController',
					controllerAs: 'list'
//                    resolve: { products:  resolveProducts },
                    
                },
                // target the content view in the product.list state
				'content@product.list': {
					templateUrl: 'app/products/list/items/items.html',
					controller: 'ProductItemsController',
					controllerAs: 'items'
//                    resolve: {
//				        products:  resolveProducts
//                    }
				}
//                'sidenav@product.list': {
//                    templateUrl: 'app/products/list/main-sidenav.html'
//               
               // }
			}
		};

		$stateProvider.state(listState);

		mainMenuProvider.addSubMenuItem('product.main', {
			name: 'Products List',
			state: listState.name
		});
	}

	// inject resolveProducts dependencies
	  resolveProducts.$inject = ['Product', '$stateParams'];
      //resolveProducts.$inject = ['$scope', '$http'];

	/**
	 * Resolve dependencies for the product.list state
	 *
	 * @params {Product} Product - The service to query products
	 * @returns {Promise} A promise that, when fullfilled, returns an array of products
	 */

            function resolveProducts(Product, $stateParams) {
               console.log($stateParams.searchText);
                return Product.getProducts({id:'products', controller:$stateParams.searchText}, function(response){
                       return response;
                        }).$promise;
            }
        
})();
