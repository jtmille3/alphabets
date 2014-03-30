'use strict';

describe('Directive: keyup', function () {

  // load the directive's module
  beforeEach(module('alphabetsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<keyup></keyup>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the keyup directive');
  }));
});
