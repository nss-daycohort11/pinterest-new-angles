app.controller("profileCtrl", ["$scope", "getUid", "$firebaseArray", 
function ($scope, authFactory, $firebaseArray) {
	//global variables
	$scope.pinUrl = "";
	$scope.pinCategory = "";
	
	
	var key;
	var currentCategory;
	
	var ref = new Firebase("https://newangles.firebaseio.com/pins");
	$scope.userId = ref.getAuth().uid;
	$scope.pins = $firebaseArray(ref);
	console.log("pins", $scope.pins);

}]); //end of contoller


//things to work on.
//1. Pin to profile
//2. filter in profile.