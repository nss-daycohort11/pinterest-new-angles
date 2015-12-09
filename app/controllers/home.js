app.controller("homeCtrl", ["$scope", "getUid", "$firebaseArray", 
function ($scope, authFactory, $firebaseArray) {
	//global variables
	$scope.pinUrl = "";
	$scope.pinCategory = "";
	$scope.searchInput = "";
	//searchInput is to declare the variable for the filter
	
	var userId;
	var key;
	var currentCategory;
	
	var ref = new Firebase("https://newangles.firebaseio.com/pins");
	
	$scope.pins = $firebaseArray(ref);
	console.log("pins", $scope.pins);
	// $scope.userIdFromScope = ref.getAuth().uid;
		

	//making pins in firebase. 
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
		//empty the input after the click.
		$scope.pinUrl = "";
		};//end Pinit function.

	//pinning to profile
	$scope.PinitToProfile = function (pinUrl) {
		var currentPinUrl = pinUrl;
		console.log("currentPinUrl", currentPinUrl);
		// Getting user info
		var userId = ref.getAuth().uid;
		console.log("userId", ref.getAuth().uid);
		// Create the category ref url
		var categoryRef = new Firebase("https://newangles.firebaseio.com/categories");
		//Pins ref url
		var pinRef = new Firebase("https://newangles.firebaseio.com/pins");

		//pushing to pin to firebase
		pinRef.push({
				"url": currentPinUrl,
				"userId": userId,
				"category": $scope.pinCategory
			});
	};
	


	//making categories key in firebase.
	$scope.Categories = function (currentCategory){
		console.log("currentCategory", currentCategory);
		ref.child("/categories/").push(currentCategory);

	};

	

	//Logout
	$scope.Logout = function () {
		ref.unauth();
		console.log("logged out");
	};



}]); //end of contoller



