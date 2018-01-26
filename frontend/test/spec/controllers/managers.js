'use strict';

describe('Controller: ManagersCtrl', function () {

  // load the controller's module
  beforeEach(module('customAppApp'));

  var ManagersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagersCtrl = $controller('ManagersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManagersCtrl.awesomeThings.length).toBe(3);
  });
});
