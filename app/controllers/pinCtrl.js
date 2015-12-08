
app.controller("pinCtrl", ["$scope", "$firebaseArray",
  function ($scope, $firebaseArray) {
      

      var ref = new Firebase("https://newangles.firebaseio.com/pins/");
      $scope.pins = $firebaseArray(ref);
     

     $scope.deletePins = function(object){
      console.log("object", object);
      //target object
      var pinIndex = $scope.pins.$getRecord(object);
      console.log("pinIndex", pinIndex);
      //target index aka place of item in array
      
        $scope.pins.$remove(object);
      //remove the item targeted in the array.  The 1 is to target only one item not the location of the item.
     }
     //delete pins from firebase

  }
]);