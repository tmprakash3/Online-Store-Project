(function () {
	'use strict';

	// register the controller as ProductController
	angular
		.module('catalogApp.product')
		.controller('ProductController', ProductController);

	// add ProductController dependencies to inject
	ProductController.$inject = [];

	/**
	 * ProductController constructor. Main controller for the catalogApp.product
	 * module.
	 *
	 * @param {$scope} $scope - The scope to listen for events
	 * @param {socket.io} socket - The socket to register updates
	 */
	function ProductController() {
		var vm = this;
        //console.log("%c Thank you for watching our Demo...", 'background: #36c391; color: #fff,font-weight:italic;font-size:20pt;');
	}

})();
