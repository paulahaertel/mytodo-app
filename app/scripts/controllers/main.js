'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    //$scope.todos = [];

    var todosInStore = localStorageService.get('todos');
    
    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
    	localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function() {
    	$scope.todos.push($scope.todo);
    	//clears input field
    	$scope.todo = '';
    };

    $scope.removeTodo = function (index) {
    	//splice(start, deleteCount[, item1[, item2[, ...]]])
    	$scope.todos.splice(index, 1);
    };
  });
