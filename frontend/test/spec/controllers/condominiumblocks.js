'use strict';

describe('Controller: CondominiumblocksCtrl', function () {

  // load the controller's module
  beforeEach(module('customAppApp'));

  var CondominiumblocksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CondominiumblocksCtrl = $controller('CondominiumblocksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CondominiumblocksCtrl.awesomeThings.length).toBe(3);
  });
});
