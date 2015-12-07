app.factory("getUid", [function () {

  var userId = '';
  //id comming from login.js facebooklogin
  return {
    addUid: function(id) {
      userId = id;
      return userId;
    },
    getUid: function() {
      console.log("userId :", userId);
      return userId;
    }
  };

}]);//end of factory