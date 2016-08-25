    'use strict';

describe('Service: medicinesService', function () {

  // load the service's module
  beforeEach(module('medsmindApp'));

  // instantiate service
  var medicinesService;
  beforeEach(inject(function (_medicinesService_) {
    medicinesService = _medicinesService_;
  }));

  it('should do something', function () {
    expect(!!medicinesService).toBe(true);
  });

});
