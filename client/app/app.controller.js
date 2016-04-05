/**
 * @ngdoc controller
 * @name catalogApp.controller:AppController
 * @description
 * This is the application wide controller of the catalogApp application
 */

(function () {
	'use strict';

	// register the controller as AppController
	angular
		.module('catalogApp')
		.controller('AppController', AppController);

	/**
	 * @ngdoc function
	 * @name catalogApp.provider:AppController
	 * @description
	 * Provider of the {@link catalogApp.controller:AppController AppController}
	 *
	 * @param {Auth} Auth - The authentication service used for logging out
	 * @param {$location} $mdSidenav - The sidenav service used to communicate with the sidenav components
	 */

	AppController.$inject = ['$mdSidenav', '$mdToast', '$location', '$localStorage','$state'];

	function AppController( $mdSidenav, $mdToast, $location, $localStorage, $state) {
		var vm = this;

		vm.sidenavId = 'mainMenu';
        vm.home = home;
        function home() {
            $location.path('/');
        }

		/**
		 * @ngdoc function
		 * @name logout
		 * @methodOf catalogApp.controller:AppController
		 * @description
		 * Logout the current user
		 */
		/*vm.logout = Auth.logout;*/

		/**
		 * @ngdoc function
		 * @name isLoggedIn
		 * @methodOf catalogApp.controller:AppController
		 * @description
		 * See {@link components/auth.service:Auth#isLoggedIn isLoggedIn} of the Auth service
		 */
		//vm.isLoggedIn = Auth.isLoggedIn;

		/**
		 * @ngdoc function
		 * @name closeMainMenu
		 * @methodOf catalogApp.controller:AppController
		 * @description
		 * Close the main menu sidenav component
		 * @returns {Promise} The promise from mdSidenav
		 */
		vm.closeMainMenu = closeMainMenu;
        
        vm.viewCart = viewCart;
        function viewCart() {
            $location.path('/viewCart');
        }
        
//        vm.addCart = addCart;
//               vm.count = 0;
//        function addCart(count) {
//            
//            if(typeof(Storage) !== "undefined") {
//                if ($localStorage.count) {
//                    $localStorage.count = Number($localStorage.count)+1;
//                } else {
//                    $localStorage.count = 1;
//                }
//            }
//            
//              vm.count++;
//            console.log($localStorage.count + "item(s) pushed into cart");
//        }
        
        vm.trackOrder = trackOrder;
        function trackOrder() {
            $location.path('/orders');
        }
        
//        vm.searchProd = searchProd;
//        
//        function searchProd(searchText) { 
//            
//            console.log(searchText);
//            $location.path('/products/list').search({searchTxt:searchText});
//        }
////            return Product.getProducts({id:vm.searchText}, function(response){
//                console.log(response);
//                return response;
//            }).$promise;
//            $state.go('product.list',{param: vm.searchText});
    
        
//        vm.showProd = showProd;
//        function showProd() {
//            $location.path("/products/list");
//        }

		/**
		 * @ngdoc function
		 * @name openMainMenu
		 * @methodOf catalogApp.controller:AppController
		 * @description
		 * Open the main menu sidenav component
		 * @returns {Promise} The promise from mdSidenav
		 */
		vm.openMainMenu = openMainMenu;

		/**
		 * @ngdoc function
		 * @name currentUser
		 * @methodOf catalogApp.controller:AppController
		 * @description
		 * See {@link components/auth.service:Auth#getCurrentUser getCurrentUser} of the Auth service
		 */
		/*vm.currentUser = Auth.getCurrentUser();*/

		/**
		 * Close the main menu sidenav component
		 */
		function closeMainMenu() {
			return $mdSidenav(vm.sidenavId).close();
		}

		/**
		 * Open the main menu sidenav component
		 */
		function openMainMenu() {
			return $mdSidenav(vm.sidenavId).open();
		}
    }
})();
