app.factory("getUid", function() {

  var userId = '';

  var ref = new Firebase("https://newangles.firebaseio.com");
  var auth = $firebaseAuth(ref);

  return {
    addUid: function(authData) {
      userId = authData.uid
      return userId;
    },
    getUid: function() {
      console.log("userId :", userId);
      return userId;
    }
  };
});