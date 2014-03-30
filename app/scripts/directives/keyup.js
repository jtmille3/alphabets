'use strict';

angular.module('alphabetsApp')
  .directive('ngGlobalKeyup', function () {
    return function (scope, element, attrs) {
		$(window).keypress(function(e) {
			scope.$apply(function(self) {
		    	self[attrs.ngGlobalKeyup](e);
			});
		});
    }
  });