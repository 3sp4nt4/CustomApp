'use strict';

angular.module('customAppApp').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'RegisterCtrl'
    })
    .state('managers', {
      url: '/managers',
      templateUrl: 'views/managers.html',
      controller: 'ManagersCtrl'
    })
    .state('condominium', {
      url: '/condominium',
      templateUrl: 'views/condominium.html',
      controller: 'CondominiumsCtrl'
    })
    .state('blocks', {
      url: '/condominium-blocks',
      templateUrl: 'views/condominium-blocks.html',
      controller: 'CondominiumBlocksCtrl'
    })
    .state('units', {
      url: '/condominium-units',
      templateUrl: 'views/condominium-units.html',
      controller: 'CondominiumUnitsCtrl'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })

    .state('logout', {
      url: '/logout',
      controller: 'LogoutCtrl'
    });
});
