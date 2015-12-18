angular.module("app.controller.navigation",[])
    .controller("NavigationController",function($scope){

	$scope.menuItems=[
	    {name:"Home",templateUrl:"#/home", isActive:"active"},
	    {name:"About",templateUrl:"#/about", isActive:""},
	];


	$scope.doActive=function(item){
	    for(var i in  $scope.menuItems){
		if(item===$scope.menuItems[i])
		    $scope.menuItems[i].isActive="active";
		else $scope.menuItems[i].isActive="";
	    }
	};
	
    });

		   
