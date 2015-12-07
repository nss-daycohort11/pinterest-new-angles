app.factory("homeFactory", ["$scope", "$firebaseArray", function ($scope, $firebaseArray) {



	$scope.info = [];

	var ref = new Firebase("https://newangles.firebaseio.com");
	$scope.info = $firebaseArray(ref);





}]); //end of contoller