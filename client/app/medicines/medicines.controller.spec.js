'use strict';

describe('Controller: MedicinesCtrl', function () {

  // load the controller's module
  beforeEach(module('medsmindApp'));

  var MedicinesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MedicinesCtrl = $controller('MedicinesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
