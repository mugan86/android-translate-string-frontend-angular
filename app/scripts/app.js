'use strict';

/**
 * @ngdoc overview
 * @name translationsApp
 * @description
 * # translationsApp
 *
 * Main module of the application.
 */
angular
  .module('translationsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider, $injector) {
    
    // use the HTML5 History API
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/translations/:id', {
        templateUrl: 'views/translations_list.html',
        controller: 'TranslationsCtrl',
        controllerAs: 'translations'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
