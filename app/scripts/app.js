'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular
  .module('adminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/required', {
        templateUrl: 'views/required.html',
        controller: 'RequiredCtrl'
      })
      .when('/email', {
        templateUrl: 'views/email.html',
        controller: 'EmailCtrl'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl'
      })
      .when('/custom', {
        templateUrl: 'views/custom.html',
        controller: 'CustomCtrl'
      })
      .when('/validation', {
        templateUrl: 'views/validation.html',
        controller: 'ValidationCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
