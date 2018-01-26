'use strict';

angular.module('customAppApp')
  .controller('RegisterCtrl', function ($scope, $http) {
    $scope.submit = function() {

      var url = 'http://localhost:3000/register';
      var user = {
        name: 'Alex'
      };

      $http.post(url, user)
        .then(
          function (res) {
            console.log(res);
          },
          function (err) {
            console.log(err);
          }
        );
    };
  });
