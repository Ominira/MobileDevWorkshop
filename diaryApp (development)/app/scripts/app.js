'use strict';

angular.module('diaryApp', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/entry', {
    templateUrl: 'views/entry.html',
    controller: 'EntryCtrl'
  })
  .when('/entrylist', {
    templateUrl: 'views/entrylist.html',
    controller: 'EntrylistCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}).run(['$rootScope','$location', '$window', function ($rootScope, $location, $window){
  $rootScope.goTo = _.debounce(function (where){
    $location.path('/' + where);
  }, 500, true);

  $rootScope.isShown = false;

  $rootScope.toggleMenu = function(){
    $rootScope.isShown = !$rootScope.isShown;
  }

  $rootScope.backTap = function(){
    $window.history.back();
  }

  $rootScope.$on('$routeChangeSuccess', function(event, next){
    if($rootScope.isShown == true){
     $rootScope.isShown = false
   }
 })
}])
