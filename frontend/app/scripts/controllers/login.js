'use strict';

angular.module('customAppApp')
  .controller('LoginCtrl', function ($scope, authToken, $state, auth) {

    $scope.submit = function() {
      auth.login($scope.userName, $scope.password)
        .then(function () {
            $state.go('main');
          },
          function () {
            $state.go('main');
          });
    };
  });
