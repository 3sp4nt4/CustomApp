'use strict';

angular.module('customAppApp')
  .controller('LogoutCtrl', function (authToken, $state) {
    authToken.removeToken();
    $state.go('login');
  });
