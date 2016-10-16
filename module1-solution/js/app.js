(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
    $scope.listItems = "";
    $scope.actionOnClick = function() {
      var input = $scope.listItems;
      if(input == "") {
        $scope.message = "Please enter data first";
      }
      var splittedArray = $scope.listItems.split(",");
      if(splittedArray.length <= 3 && splittedArray != "") {
        $scope.message = 'Enjoy!';
      }
      if (splittedArray.length > 3) {
        $scope.message = "Too much!";
      }
  };
};

})();
