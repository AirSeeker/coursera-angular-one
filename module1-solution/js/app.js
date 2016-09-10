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
			
			for (var i = getArrayOfList.length - 1; i >= 0; i--) {
				if(getArrayOfList[i] === ''){
					getArrayOfList.splice(i, 1);
				}
			}
			console.log(getArrayOfList.length);
			if(getArrayOfList[getArrayOfList.length-1] === '' && getArrayOfList.length > 1){
				getArrayOfList.pop();
			}

			if(getArrayOfList.length === 0){
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