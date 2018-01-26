'use strict';

angular.module('customAppApp')
  .controller('HeaderCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = function () {
      return authToken.isAuthenticated();
    };
  });
