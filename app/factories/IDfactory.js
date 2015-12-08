app.factory("getUid", [function () {

  var userId = '';
 
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
