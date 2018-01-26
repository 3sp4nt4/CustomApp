'use strict';

describe('Controller: CondominiumUnitsCtrl', function () {

  // load the controller's module
  beforeEach(module('customAppApp'));

  var CondominiumUnitsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CondominiumUnitsCtrl = $controller('CondominiumUnitsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CondominiumUnitsCtrl.awesomeThings.length).toBe(3);
  });
});
