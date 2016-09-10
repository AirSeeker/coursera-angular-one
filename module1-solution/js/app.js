(function(){
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
		$scope.listOfNames = '';
		$scope.message = '';

		$scope.checkList = function(){
			var getArrayOfList = $scope.listOfNames.trim().split(',');
			console.log(getArrayOfList.length);

			if(getArrayOfList[getArrayOfList.length-1] === '' && getArrayOfList.length > 1){
				getArrayOfList.pop();
			}

			if(getArrayOfList.length === 1 && getArrayOfList[0] === ''){
				return $scope.message = 'Please enter data first';
			}

			if(getArrayOfList.length > 3 && getArrayOfList[0] !== ''){
				return $scope.message = 'Too much!';
			}

			if(getArrayOfList.length === 1 && getArrayOfList[0] !== ''){

				return $scope.message = 'Enjoy!';
			}

			if(getArrayOfList.length <= 3 && getArrayOfList[0] !== ''){
				return $scope.message = 'Enjoy!';
			}
			
		};

	};
	
})();