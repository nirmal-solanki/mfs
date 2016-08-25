'use strict';

describe('Controller: MedicationsCtrl', function () {

  // load the controller's module
  beforeEach(module('medsmindApp'));

  var MedicationsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MedicationsCtrl = $controller('MedicationsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
