/* setup your angular app here */
var app = angular.module('fruitVeg', []);

app.controller('mainCtrl', ['$scope', function($scope) {
  $scope.fruits = [];
  $scope.veggies = [];
  
 	$scope.randomize = function(array) {
    array.forEach(function(item, index){
      array.splice(Math.floor(Math.random()*array.length), 0, array.splice(index, 1)[0]);
    });
    return array;
  };
	
	$scope.Combo = fruits.concat(vegetables);

  $scope.moveLeft = function(index) {
    $scope.fruits.push($scope.Combo.splice(index, 1)[0]);
  }

  $scope.moveRight = function(index) {
    $scope.veggies.push($scope.Combo.splice(index, 1)[0]);
  }

  $scope.moveLeft2Combo = function(index) {
    $scope.Combo.push($scope.veggies.splice(index, 1)[0]);
  }

  $scope.moveRight2Combo = function(index) {
    $scope.Combo.push($scope.fruits.splice(index, 1)[0]);
  }
  $scope.findVeggie = function(index) {
    if(vegetables.indexOf($scope.veggies[index])>=0){
      return true;
    } else{
      return false;
    }
  };
  $scope.findFruit = function(index) {
    if(fruits.indexOf($scope.fruits[index])>=0){
      return true;
    } else{
      return false;
    }
  };
  $scope.checkResult = function() {
    var result = true;
    $scope.fruits.forEach(function(fruit){
      if(vegetables.indexOf(fruit)>=0){
        result = false;
      }
    });
    $scope.veggies.forEach(function(vegetable){
      if(fruits.indexOf(vegetable)>=0){
        result = false;
      }
    });
    return result;
  };
}]);

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
