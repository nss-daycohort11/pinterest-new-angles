app.controller("homeCtrl", ["$scope", "getUid","$firebaseArray", 
	function ($scope, authFactory, $firebaseArray) {

	console.log("home controller is linked");
	
	var key;
	var currentCategory
	var ref = new Firebase("https://newangles.firebaseio.com/");
	//making pin variable available for html
	var pinsRef = ref.child("/pins");
	$scope.pins = $firebaseArray(pinsRef);
	$scope.userIdFromScope = ref.getAuth().uid;



	//making pins in firebase. pinit and category come from input in home.html
	$scope.Pinit = function (pinit, category) {
		//assigning variables.
		var Input = pinit;
		currentCategory = category;

		console.log("input", Input);
		
		var userId = ref.getAuth().uid;
		console.log("userId", ref.getAuth().uid);
		//pushing to firebase
		ref.child("/pins/").push({"url": Input,
				"userId": userId,
				"category": currentCategory});
		
	}
	//making categories key in firebase.
	$scope.Categories = function (currentCategory){
		console.log("currentCategory", currentCategory);
		ref.child("/categories/").push(currentCategory);

	}

	$scope.pins.$loaded().then(function(){
		console.log("$scope.pins", $scope.pins);
		// $scope.selectedPin = $scope.pins.$getRecord($scope.);
	});

	//Logout
	$scope.Logout = function () {
		ref.unauth();
		console.log("logged out");
	}

}]); //end of contoller