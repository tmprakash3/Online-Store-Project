(function () {
	'use strict';

	/**
	 * Register the list controller as ProductListController
	 */
	angular
		.module('catalogApp.product.list')
		.controller('ProductListController', ProductListController);

	// add ProductListController dependencies to inject
	ProductListController.$inject = ['$scope', '$state', 'products', 'ToggleComponent', '$location', 'Product'];

	/**
	 * ProductListController constructor
	 *
	 * @param {Object} $scope - The current scope
	 * @param {Object} socket - The socket service to register to
	 * @param {$state} $state - The $state to activate routing states on
	 * @param {Array} products - The list of products resolved for this route
	 * @param {Service} ToggleComponent - The service for switching the detail view
	 */
	function ProductListController($scope, $state, products, ToggleComponent, $location, Product) {
    var vm =this;
        vm.products = products;
        console.log(vm.products);
//        angular.element(document).ready(function (Product) {
//
//            Product.search.get().$promise.then(function(response){
//                result = response._embedded;
//                console.log(result.products);
//                return result.products;
//            }).catch(function(){
//                return result;
//            });
//             console.log(vm.products);
//        });
                
            
       
            


		// the array of products
		
        
        
        
		// toggle detail view
		vm.toggleDetails = toggleDetails;

		// initialize the controller
		//activate();
        vm.toggleSelection = toggleSelection;         
        
        function toggleSelection() {
           angular.forEach(vm.products, function(key,value) {
               if(key.cost>=20000) {
                   console.log(key.cost);
               }
               else {
                   console.log(key.cost);
               }
               
           });
        }
        
//        vm.detailView = detailView;
//        function detailView() {
//            $state.go('product.list.detail');
//        }
		/**
		 * Register socket updates and unsync on scope $destroy event
		 */
//		function activate() {
//			socket.syncUpdates('product', vm.products);
//			$scope.$on('$destroy', unsyncProductUpdates);
//
//			function unsyncProductUpdates() {
//				socket.unsyncUpdates('product');
//			}
//		}
        

		/**
		 * Toggle the detail view
		 */
		function toggleDetails() {
			ToggleComponent('product.detailView').toggle();
		}
	}

})();
