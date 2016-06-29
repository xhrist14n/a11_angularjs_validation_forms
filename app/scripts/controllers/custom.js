'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('CustomCtrl', function ($scope) {
    activeMenu('custom');

  });


angular.module('adminApp').directive('letra', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attr, mCtrl) {
        function myValidation(value) {
          if (value.indexOf("e") > -1) {
            mCtrl.$setValidity('charE', true);
          } else {
            mCtrl.$setValidity('charE', false);
          }
          return value;
        }
        mCtrl.$parsers.push(myValidation);
      }
    };
  });
