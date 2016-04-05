(function () {
	'use strict';

	// register the controller as ProductController
	angular
		.module('catalogApp.return')
		.controller('ReturnController', ReturnController);

	// add ProductController dependencies to inject
	ReturnController.$inject = ['returns'];

	/**
	 * ProductController constructor. Main controller for the catalogApp.product
	 * module.
	 *
	 * @param {$scope} $scope - The scope to listen for events
	 * @param {socket.io} socket - The socket to register updates
	 */
	function ReturnController(returns) {
		var vm = this;
/*         vm.returns = returns;
        console.log(vm.returns);      
        vm.trackOrder = trackOrder;
        function trackOrder() {
            console.log("order tracking...");
        }
        
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
        
        //return order s
        vm.returnOrder = returnOrder;
        function returnOrder() {
           document.getElementById('error').innerHTML = "please select any one of the order to return";
            if(order.selected==true) {
                document.getElementById('error').innerHTML = '';
            }
        } */
	}
    

})();
