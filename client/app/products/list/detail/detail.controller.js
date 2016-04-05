(function () {
	'use strict';

	/**
	 * Register the edit controller as ProductDetailController
 	 */

	angular
		.module('catalogApp.product.list.detail')
		.controller('ProductDetailController', ProductDetailController);

	// add ProductDetailController dependencies to inject
	ProductDetailController.$inject = ['$state', 'product', 'products', '$stateParams', 'Product'];

	/**
	 * ProductDetailController constructor
	 */
	function ProductDetailController($state, product, products, $stateParams, Product) {
		var vm = this;

		// the current product to display
		 vm.product = product;
         console.log(vm.product);
		// switch to the edit state
		vm.edit = edit;
		// switch to the parent state
		vm.goBack = goBack;
                    
        vm.addToCart = addToCart;
        vm.count = 0;
        function addToCart() {
            var cartList = [];
            var cart = {};
                cart.productId = vm.product.product.productId;
                cart.quantity = "1";
                cart.userId="123456";
                cart.productCost=vm.product.product.productCost;
                cartList.push(cart);
             Product.createCart({id:'cart'}, cartList).$promise.then(function(results){
                return results;
            }).catch(function(results){
                return {};
            });
            vm.count++;
           //$state.go('cart',{'id': vm.product.product._productId});
        }
        
        vm.viewCart = viewCart;
        function viewCart() {
            $state.go('cart');
        }
     
        
        /**
		 * Open the edit state with the current product
		 *
		 */
		function edit() {
			$state.go('^.edit', {'id': vm.product._id});
		}

		/**
		 * Return to the parent state
		 *
		 */
		function goBack() {
			$state.go('^');
		}
	}
})();
