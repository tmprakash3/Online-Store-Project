/**
 * @ngdoc controller
 * @name catalogApp.main.controller:MainController
 * @description
 * Controls mainly nothing currently
 */

(function () {
	'use strict';

	// register the controller as MainController
	angular
		.module('catalogApp.main')
		.controller('MainController', MainController);

	/**
	 * @ngdoc function
	 * @name catalogApp.main.provider:MainController
	 * @description
	 * Provider of the {@link catalogApp.main.controller:MainController MainController}
	 *
	 * @param {Service} $scope The scope service to use
	 * @param {Service} $http The http service to use
	 */

	MainController.$inject = ['$state', '$location', '$http', '$scope', 'Product'];

	function MainController($state, $location, $http, $scope, Product) {
		var vm = this;
        
        vm.searchProd = searchProd;
        function searchProd() { 
            console.log(vm.searchText);
            $state.go('product.list', {'searchText': vm.searchText});
            //$location.path('/products/list').search({searchText:vm.searchText});
        }

    }

})();
