app.controller("loginCtrl", ["$scope", "$firebaseAuth", "getUid", '$firebaseArray',
	function ($scope, $firebaseAuth, authFactory, $firebaseArray) {

	console.log("contoller is linked");
	$scope.login = function () {

		console.log("Success!!");
	};

  	//facebook login
  	$scope.facebookLogin = function () {
		var ref = new Firebase("https://newangles.firebaseio.com/users/");

	 	// create an instance of the authentication service
	  	var auth = $firebaseAuth(ref);
  		auth.$authWithOAuthPopup("facebook").then(function (authData){
  			console.log("logged in as:", authData.uid);
        //setting data inside current user.
        ref.child(authData.uid).set(authData);
  			//sent uid to the factory to use later
  			// authFactory.addUid(authData.uid);
      
  		}).catch(function(error){
  			console.log("authentication failed:", error);
  		});
  	};





}]); //end of contoller