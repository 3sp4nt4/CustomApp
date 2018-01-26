'use strict';

angular.module('customAppApp').factory('authToken', function($window) {
  var storage = $window.localStorage;
  var cachedToken = null;
  var userToken = '_userToken_';

  var authToken = {
    setToken: function (token) {
      cachedToken = token;
      storage.setItem(userToken, token);
    },
    getToken: function () {
      if (!cachedToken) {
        cachedToken = storage.getItem(userToken);
      }

      return cachedToken;
    },
    isAuthenticated: function () {
      return !!this.getToken();
    },
    removeToken: function () {
      cachedToken = null;
      storage.removeItem(userToken);
    }
  };

    return authToken;
});
