'use strict';

angular.module('customAppApp')
  .controller('ManagersCtrl', function ($scope) {
    $scope.managers = [{}];

    $scope.addManager = function () {
      $scope.managers.push({});
    };

    $scope.removeManager = function (index) {
      $scope.managers.splice(index, 1);
    };

    $scope.save = function() {
      console.log($scope.managers);
    };
  });
