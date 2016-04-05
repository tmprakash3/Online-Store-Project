(function () {
	'use strict';

	// register the controller as ProductController
	angular
		.module('catalogApp.shipping')
		.controller('ShippingController', ShippingController);

	// add ProductController dependencies to inject
	ShippingController.$inject = ['orders', '$location','Product', 'ProductService', '$state'];

	/**
	 * ProductController constructor. Main controller for the catalogApp.product
	 * module.
	 *
	 * @param {$scope} $scope - The scope to listen for events
	 * @param {socket.io} socket - The socket to register updates
	 */
	function ShippingController(orders, $location, Product, ProductService, $state) {
		var vm = this;
        vm.orders = orders;
        
        vm.banks = ['Axis Bank', 'State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Citi Bank'];
        
        //shipment object to hold shipping details
        vm.shipment = {};
        
        //order object to hold order details
        //vm.order = {};
        // vm.order.orderId = '1';
        // vm.order.paymentId = '12545';
        // vm.order.userId = '123456';
        // vm.order.orderStatus = 'Paid';
        // vm.order.orderTrackingId = '2';
        // vm.order.orderDate = new Date();

        //paymentStatus
        vm.paymentStatus = {};
        vm.paymentStatus.userId = '123456';
        vm.paymentStatus.paymentReferenceId = '1234';
		
		var orderAndAddress = {};
		orderAndAddress.orderAddress = vm.shipment;
		orderAndAddress.paymentStatus = vm.paymentStatus;

        vm.create = createShipment; 

        function createShipment(form) {
       
            if ((form && !form.$valid)) {
                
				return;
			}

			Product.createShipment({id: 'order'},orderAndAddress).$promise.then(function(results){ 
					console.log(results);
				
			//$location.path('/history');
			$state.go('order');
           	
			}).catch(function(){
					return {};
			});
			console.log("success...");
			//$state.go('order');
           	
        }
        
	}
    

})();
