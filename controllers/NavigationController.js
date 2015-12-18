angular.module("app.controller.navigation",[])
    .controller("NavigationController",function($scope){
	$scope.isToggled=false;
	$scope.toggleCollapse=function(){
	    if($scope.isToggled)
		$scope.isToggled=true;
	    else
		$scope.isToggled=false;
	};
    });

		   
