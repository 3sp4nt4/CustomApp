'use strict';

angular.module('customAppApp')
  .controller('CondominiumUnitsCtrl', function ($scope) {
    $scope.units = [{}];

    $scope.addUnit = function() {
      $scope.units.push({});
    };

    $scope.removeUnit = function (index) {
      $scope.units.splice(index, 1);
    };

    $scope.save = function() {
      console.log($scope.units);
    };
  });
