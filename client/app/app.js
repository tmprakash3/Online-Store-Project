/**
 * @ngdoc overview
 * @name catalogApp
 * @description
 * Module definition for the catalogApp module.
 */

(function () {
	'use strict';

	angular
		.module('catalogApp', [
			// Add modules below
			'catalogApp.product',
			'ngCookies',
			'ngResource',
			'ngSanitize',
			'ngMessages',
			'ngMaterial',
			'ui.router',
            'ngStorage',
//			'btford.socket-io',
			'catalogApp.lodash',
			'catalogApp.mainMenu',
//			'catalogApp.io',
//			'catalogApp.socket',
			'catalogApp.main',
			'catalogApp.toast',
			'catalogApp.cart',
            'catalogApp.order',
            'catalogApp.shipping',
			'catalogApp.return',
            'catalogApp.auth',
			'catalogApp.admin',
			'catalogApp.account',
		])
		.config(appConfig);

	/* App configuration */

	// add appConfig dependencies to inject
	appConfig.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider', '$mdThemingProvider', '$mdIconProvider', '$httpProvider'];

	/**
	 * Application config function
	 *
	 * @param $stateProvider
	 * @param $urlRouterProvider
	 * @param $locationProvider
	 */
	function appConfig($urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider, $mdThemingProvider, $mdIconProvider, $httpProvider) {
          $httpProvider.defaults.headers.common = {};
          $httpProvider.defaults.headers.post = {};
          $httpProvider.defaults.headers.put = {};
          $httpProvider.defaults.headers.patch = {};
          $httpProvider.defaults.headers.del = {};
        
		$urlRouterProvider.otherwise('/main');
		$urlMatcherFactoryProvider.strictMode(false);
		$locationProvider.html5Mode(true);
	


		// set the default palette name
		var defaultPalette = 'light-green';
		// define a palette to darken the background of components
		var greyBackgroundMap = $mdThemingProvider.extendPalette(defaultPalette, {'A100': 'fafafa'});

		$mdThemingProvider.definePalette('grey-background', greyBackgroundMap);
		$mdThemingProvider.setDefaultTheme(defaultPalette);

		// customize the theme
		$mdThemingProvider
			.theme(defaultPalette)
			.primaryPalette(defaultPalette)
			.accentPalette('amber')
			.backgroundPalette('grey-background');

		var spritePath = 'bower_components/material-design-icons/sprites/svg-sprite/';
		$mdIconProvider.iconSet('navigation', spritePath + 'svg-sprite-navigation.svg');
		$mdIconProvider.iconSet('action', spritePath + 'svg-sprite-action.svg');
		$mdIconProvider.iconSet('content', spritePath + 'svg-sprite-content.svg');
		$mdIconProvider.iconSet('toggle', spritePath + 'svg-sprite-toggle.svg');
		$mdIconProvider.iconSet('alert', spritePath + 'svg-sprite-alert.svg');
        $mdIconProvider.iconSet('hardware', spritePath + 'svg-sprite-hardware.svg');
	};

})();
