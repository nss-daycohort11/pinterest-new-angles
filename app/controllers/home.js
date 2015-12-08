app.controller("homeCtrl", ["$scope", "getUid", "$firebaseArray", 
function ($scope, authFactory, $firebaseArray) {

	$scope.pinUrl = "";
	$scope.pinCategory = "";

	//making pins in firebase. pinit and category come from input in home.html
	$scope.Pinit = function () {
		// Getting user info
		var userId = ref.getAuth().uid;
		console.log("userId", ref.getAuth().uid);

		// Create the category
		var categoryRef = new Firebase("https://newangles.firebaseio.com/categories");
		var pinRef = new Firebase("https://newangles.firebaseio.com/pins");

		categoryRef.push({
			"userId": userId,
			"name": $scope.pinCategory
		}, function (a,b,c) {
			// var categoryRef = new Firebase("https://newangles.firebaseio.com/categories");
			//we have to decide whether we do a new call on firebase and repush up the categories or just do a drop down select box
			console.log(arguments);
			pinRef.push({
				"url": $scope.pinUrl,
				"userId": userId,
				"category": $scope.pinCategory
			});
		});


		//pushing to firebase
		
	};

     $scope.deletePin = function ( pin ) {
		//remove the item targeted in the array
		$scope.pins.$remove(pin);
     }

	
	console.log("home controller is linked");
	var userId;
	var key;
	var currentCategory;
	
	var ref = new Firebase("https://newangles.firebaseio.com/pins");
	//making pin variable available for html
	$scope.pins = $firebaseArray(ref);


	//making categories key in firebase.
	$scope.Categories = function (currentCategory){
		console.log("currentCategory", currentCategory);
		ref.child("/categories/").push(currentCategory);

	}

	$scope.pins.$loaded().then(function(){
		console.log("$scope.pins", $scope.pins);
		// $scope.selectedPin = $scope.pins.$getRecord($scope.);
	});


}]); //end of contoller