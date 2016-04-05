(function () {
	'use strict';

	// register the controller as ProductController
	angular
		.module('catalogApp.cart')
		.controller('CartController', CartController);

	// add ProductController dependencies to inject
	CartController.$inject = ['carts', 'Product', '$location', '$state'];

	/**
	 * ProductController constructor. Main controller for the catalogApp.product
	 * module.
	 *
	 * @param {$scope} $scope - The scope to listen for events
	 * @param {socket.io} socket - The socket to register updates
	 */
	function CartController(carts, Product, $location, $state) {
		var vm = this;
        vm.carts = carts;
     
               
        // Get Grand Total
        vm.getTotal = getTotal;
        
        function getTotal() {
        var total = 0;
        for(var i = 0; i < vm.carts.length; i++){
            var product = vm.carts[i];
            total += (product.cart.productCost * product.cart.quantity);
        }
        return total;
    }
        
        //Remove item from the cart
        vm.removeItem = removeItem;
        
        function removeItem(cartId) {
            console.log(Product);
            console.log(cartId);
            var cart = {};
            cart.cartId = cartId;
            return Product.removeCartItem({id:'cartItem'}, cart).$promise.then(function(results){
                $state.reload();
                console.log(results);
                return results;
            }).catch(function(results){
                return {};
            });        
        }
        
        //direct to shipping 
          vm.placeOrder = placeOrder;
        
          function placeOrder() {
//              -------------------------
              var updateCart = [];
              
              for(var i=0;i<carts.length;i++)
                {
                  var cartTotal = vm.carts[i].cart.quantity * vm.carts[i].cart.productCost;
                  vm.carts[i].cart.productCost = cartTotal;
                  console.log(vm.carts[i].cart);
                  updateCart.push(vm.carts[i].cart);
                  console.log(updateCart);
                }
               
//              --------------------------
              Product.createCart({id:'cart'}, updateCart).$promise.then(function(results){
                return results;
            }).catch(function(results){
                return {};
            });
            $state.go('shipment');
          }
        
//        vm.carts = carts;
//        var results = results;
//        Product.query().$promise.then(function(results){
//            var carts = results;
//            console.log(carts);
//        });
//        
//        console.log("cart controller...");
//        console.log(vm.carts);
        
	}

})();
