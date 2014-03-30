'use strict';

angular.module('alphabetsApp')
  .controller('MainCtrl', function ($scope) {
    initialize();

    $scope.handleKeyup = function(e) {
    	if($scope.selectedLetter) {
			var key = e.which;
			var letter = String.fromCharCode(key).toUpperCase();
			if($scope.selectedLetter === letter) {
				$scope.right.push($scope.selectedLetter);
				$scope.selectedLetter = $scope.letters.splice(0, 1)[0] || '';
			} else if(!Lazy($scope.wrong).contains($scope.selectedLetter)) {
				$scope.wrong.push($scope.selectedLetter);
			}
		} else {
			// restart
			initialize(true);
		}
    };

    $scope.handleKeydown = function(e) {
    	var key = e.which;
		var letter = String.fromCharCode(key).toUpperCase();
    }

    function initialize(shuffle) {
    	var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    	$scope.right = [];
	    $scope.wrong = [];

	    if(shuffle) {
	    	alphabet = Lazy(alphabet).shuffle().toArray();
	    }

	    $scope.letters = alphabet;
	    $scope.selectedLetter = $scope.letters.splice(0, 1)[0];
    }
  });
