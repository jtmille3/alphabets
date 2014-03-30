'use strict';

angular.module('alphabetsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.right = [];
    $scope.wrong = [];

    $scope.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    $scope.letter = $scope.letters.splice(0, 1)[0];

    $scope.handleKeyup = function(e) {
		var key = e.which;
		var letter = String.fromCharCode(key).toUpperCase();
		if($scope.letter === letter) {
			$scope.right.push($scope.letter);
			$scope.letter = $scope.letters.splice(0, 1)[0];
		} else if(!Lazy($scope.wrong).contains($scope.letter)) {
			$scope.wrong.push($scope.letter);
		}
    };
  });
