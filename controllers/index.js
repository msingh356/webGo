angular.module("app.controllers",['app.controller.navigation'])
    .controller("HomeController",function($scope){
	$scope.name="This is home page from HomeController";
    }).
    controller("AboutController",function($scope){
	$scope.name="This is about page from AboutController";
	
    });
