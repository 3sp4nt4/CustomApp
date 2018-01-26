'use strict';

angular.module('customAppApp')
  .controller('CondominiumsCtrl', function ($scope) {
    $scope.condominiums = [{}];

    $scope.addCondominium = function() {
      $scope.condominiums.push({});
    };

    $scope.removeCondominium = function (index) {
      $scope.condominiums.splice(index, 1);
    };

    $scope.save = function() {
      console.log($scope.condominiums);
    };
  });
