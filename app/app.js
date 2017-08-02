'use strict';
angular.module('myApp', [
  'ngRoute',
  'myApp.seatSelector',
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $routeProvider.otherwise({ redirectTo: '/seatSelection' });
  /** Uncomment in production **/
//  $locationProvider.html5Mode(true);
}]);


