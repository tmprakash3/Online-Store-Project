(function () {
	'use strict';

	// register the controller as ProductController
	angular
		.module('catalogApp.order')
		.controller('OrderController', OrderController);

	// add ProductController dependencies to inject
	OrderController.$inject = ['orders', '$location'];

	/**
	 * ProductController constructor. Main controller for the catalogApp.product
	 * module.
	 *
	 * @param {$scope} $scope - The scope to listen for events
	 * @param {socket.io} socket - The socket to register updates
	 */
	function OrderController(orders, $location) {
		var vm = this;
        vm.orders = orders;
        console.log(vm.orders);
        
        vm.trackOrder = trackOrder;
        function trackOrder() {
            console.log("order tracking...");
        }

        vm.returnTypes = [
        { category: 'return1', name: 'Not satisfied with the product' },
        { category: 'return2', name: 'Not satisfied with the service' },
        { category: 'return3', name: 'Item is not there in the order box' },
        { category: 'return4', name: 'Service is not available in my area' }
      ];

       
        //toggle item selection
        vm.toggleItem = function (order) {
        order.selected = !order.selected;
            vm.showDelete = false;
                angular.forEach(vm.orders, function(order, index) {
                // setting the Delete icon
                if(order.selected) {
                    vm.showDelete=true;                              
                }
            }); 
        };

        //remove items
        vm.removeItem = removeItem;
        function removeItem($index) {
            for(var i=0;i<vm.orders.length;i++) {
                vm.orders.splice($index,1);
                break;
            }
        }
        
        vm.submit = submit;
        function submit() {
            document.getElementById('error').innerHTML = "please select any one of the order to return";
            if(vm.orders.selected==true) {
                document.getElementById('error').innerHTML = '';
            }
        }
        
        //return order s
        vm.returnOrder = returnOrder;
        function returnOrder() {
           $location.path('/returns');
	}
    
    }
})();
