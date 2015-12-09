var app = angular.module("NewAngles", ["ngRoute", "firebase", "angular.filter"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider.
      when('/newAngles/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
      }).
      when('/newAngles/home', {
      	templateUrl: 'partials/home.html',
      	controller: 'homeCtrl'
      }).
      when('/newAngles/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'profileCtrl'
      })
      .otherwise('/newAngles/login');

}]);//end of config