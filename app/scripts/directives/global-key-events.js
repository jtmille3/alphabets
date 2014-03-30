'use strict';

angular.module('alphabetsApp')
  .directive('ngGlobalKeyup', function () {
    return function (scope, element, attrs) {
		$(window).keyup(function(e) {
			scope.$apply(function(self) {
		    	self[attrs.ngGlobalKeyup](e);
			});
		});
    }
  })
  .directive('ngGlobalKeydown', function () {
    return function (scope, element, attrs) {
		$(window).keydown(function(e) {
			scope.$apply(function(self) {
		    	self[attrs.ngGlobalKeydown](e);
			});
		});
    }
  })
  .directive('ngGlobalKeypress', function () {
    return function (scope, element, attrs) {
		$(window).keypress(function(e) {
			scope.$apply(function(self) {
		    	self[attrs.ngGlobalKeypress](e);
			});
		});
    }
  });