	/**
	 * @ngdoc overview
	 * @name testAppApp.admin.user.list.items
	 * @requires ui.router
	 * @requires components/listImage
	 *
	 * @description
	 * The `testAppApp.admin.user.list.items` module which provides:
	 *
	 * - {@link testAppApp.admin.user.list.items.controller:UserItemsController UserItemsController}
	 */

(function () {
	'use strict';

	angular
		.module('catalogApp.admin.user.list.items', [
			'ui.router',
			'catalogApp.listImage'
		]);

})();
