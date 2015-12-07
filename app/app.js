var app = angular.module("NewAngles", ["ngRoute", "firebase"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider.
      when('/newAngles/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
      }).
      when('/newAngles/home', {
      	templateUrl: 'partials/home.html',
      	controller: 'homeCtrl'
      })
      .otherwise('/newAngles/login');

}]);//end of config