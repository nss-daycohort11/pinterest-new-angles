app.controller("homeCtrl", ["$scope", "getUid", "$firebaseArray", 
function ($scope, authFactory, $firebaseArray) {
	//global variables
	$scope.pinUrl = "";
	$scope.pinCategory = "";

	var userId;
	var key;
	var currentCategory;
	//ref for $scope.pins to use in html
	var ref = new Firebase("https://newangles.firebaseio.com/pins");
	//global pin variable available for html
	$scope.pins = $firebaseArray(ref);



	//making pins in firebase. pinit and category come from input in home.html
	$scope.Pinit = function () {
		// Getting user info
		var userId = ref.getAuth().uid;
		console.log("userId", ref.getAuth().uid);

		// Create the category ref url
		var categoryRef = new Firebase("https://newangles.firebaseio.com/categories");
		//Pins ref url
		var pinRef = new Firebase("https://newangles.firebaseio.com/pins");

		//pushing to category to firebase
		categoryRef.push({
			"userId": userId,
			"name": $scope.pinCategory
			});
		//pushing to pin to firebase
		pinRef.push({
				"url": $scope.pinUrl,
				"userId": userId,
				"category": $scope.pinCategory
			});
		};//end Pinit function.


		


     $scope.deletePin = function ( pin ) {
		//remove the item targeted in the array
		$scope.pins.$remove(pin);
     }
	


	//making categories key in firebase.
	$scope.Categories = function (currentCategory){
		console.log("currentCategory", currentCategory);
		ref.child("/categories/").push(currentCategory);

	}

	// $scope.pins.$loaded().then(function(){
	// 	console.log("$scope.pins", $scope.pins);
	// 	// $scope.selectedPin = $scope.pins.$getRecord($scope.);
	// });


}]); //end of contoller