(function () {
	'use strict';

	/**
	 * Introduce the catalogApp.product.service module.
	 * Register the product resource as Product, register the
	 * service as ProductService.
	 *
	 * @requires {catalogApp.resource}
	 */
	angular
		.module('catalogApp.product.service', ['catalogApp.resource'])
		.factory('Product', Product)
		.service('ProductService', ProductService);

	// add Product dependencies to inject
	   Product.$inject = ['Resource'];
       //Product.$inject = ['$http'];
	/**
	 * Product resource constructor
	 */
	function Product($resource) {
       var apiURL = 'http://192.168.241.11:8080/store';
       //var apiURL = 'http://localhost:8080/store';
       console.log(apiURL);
        //var property = 'first';
        var methods = {
          getProducts : {
                method: 'GET',
                params: {id: 'products', controller:'searchParam'},
               isArray: true
            },
            getProductDetails : {
                method: 'GET',
                params: {id: 'productDetails', controller:'productId'}
            },
            createCart: {
                method: 'POST',
                params: {id:'cart'},
                  data: [],
               isArray: true
            },
          getCartItems: {
                method: 'GET',
                params: {id: 'cart', controller: ':userId'},
               isArray: true
            },
        removeCartItem: {
                method: 'POST',
                params: {id:'cartItem'}
            },
        createShipment: {
        	    method: 'POST',
        	    params: {id: 'order'}
        },
             getOrders: {
             	method: 'GET',
             	params: {id: 'orderList', controller: ':userId'},
               isArray: true
             }
        };
		// public API
		//return $resource(apiURL + '/:id/:controller');
        
        return $resource(apiURL + '/:id/:controller',{},methods);
    }

	// add ProductService dependencies to inject
	ProductService.$inject = ['Product'];

	/**
	 * ProductService constructor
	 * AngularJS will instantiate a singleton by calling "new" on this function
	 *
	 * @param {$resource} Product The resource provided by catalogApp.product.resource
	 * @returns {Object} The service definition for the ProductService service
	 */
	function ProductService(Product) {

		return {
			create: create,
			update: update,
			remove: remove
		};

		/**
		 * Save a new product
		 *
		 * @param  {Object}   product - productData
		 * @param  {Function} callback - optional
		 * @return {Promise}
		 */
		function create(product, callback) {
            console.log("angular services");
			var cb = callback || angular.noop;

			return Product.create(product,
				function (product) {
                console.log(product);
					return cb(product);
				},
				function (err) {
					return cb(err);
				}).$promise;
		}

		/**
		 * Remove a product
		 *
		 * @param  {Object}   product - productData
		 * @param  {Function} callback - optional
		 * @return {Promise}
		 */
		function remove(product, callback) {
			var cb = callback || angular.noop;

			return Product.remove({id: product._id},
				function (product) {
					return cb(product);
				},
				function (err) {
					return cb(err);
				}).$promise;
		}
        
		/**
		 * Create a new product
		 *
		 * @param  {Object}   product - productData
		 * @param  {Function} callback - optional
		 * @return {Promise}
		 */
		function update(product, callback) {
			var cb = callback || angular.noop;

			return Product.update(product,
				function (product) {
					return cb(product);
				},
				function (err) {
					return cb(err);
				}).$promise;
		}
        
//        function createShipment(product, callback) {
//               console.log("Product Service create Shipment...");
//               var cb = callback || angular.noop;
//
//               return Product.createShipment(product,
//                function (product) {
//                 return cb(product);
//                },
//                function (err) {
//                 return cb(err);
//                }).$promise;
//          }
	};
})();
