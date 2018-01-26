'use strict';

angular.module('customAppApp')
  .service('auth', function ($http, authToken) {
    var url = 'localhost:80\\' + 'login';

    this.login = function(username, password) {
      return $http.post(url, {userName: username, password: password})
        .then(function (res) {
          console.log(res);
          authToken.setToken('teste');
        }, function () {
          // tratar caso de ero
          authToken.setToken('teste');
        });
    };
  });
