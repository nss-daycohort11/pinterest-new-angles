var app = angular.module("NewAngles", ["ngRoute", "firebase"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider.
      when('/newAngles/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
      }).
      when('', {
        templateUrl: 'partials/',
        controller: 'AppCtrl'
      });

}]);//end of config