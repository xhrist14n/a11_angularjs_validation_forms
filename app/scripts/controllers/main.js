'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('MainCtrl', function ($scope) {
    activeMenu('main');

    $scope.curso='Desarrollo de Aplicaciones Web con AngularJS - Validacion de Formularios';
    $scope.autor = "Christian Portilla Pauca";


  }
);
