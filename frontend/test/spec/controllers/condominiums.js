'use strict';

describe('Controller: CondominiumsCtrl', function () {

  // load the controller's module
  beforeEach(module('customAppApp'));

  var CondominiumsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CondominiumsCtrl = $controller('CondominiumsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CondominiumsCtrl.awesomeThings.length).toBe(3);
  });
});
