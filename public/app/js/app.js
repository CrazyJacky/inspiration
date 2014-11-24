'use strict';

var inspirationApp = angular.module('inspirationApp', [
  'ngRoute',
  'inspirationControllers'
]);

inspirationApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/quotes', {
        templateUrl: 'app/partials/show-all.html',
        controller: 'ShowAllCtrl'
      }).
      when('/quotes/:id', {
        templateUrl: 'app/partials/show-quote.html',
        controller: 'ShowQuoteCtrl'
      }).
      when('/quotes/edit/:id', {
        templateUrl: 'app/partials/edit-quote.html',
        controller: 'EditQuoteCtrl'
      }).
      when('/authors', {
        templateUrl: 'app/partials/show-authors.html',
        controller: 'ShowAuthorsCtrl'
      }).
      when('/authors/:id', {
        templateUrl: 'app/partials/show-author.html',
        controller: 'ShowAuthorCtrl'
      }).
      when('/authors/edit/:id', {
        templateUrl: 'app/partials/edit-author.html',
        controller: 'EditAuthorCtrl'
      }).
      when('/jobs', {
        templateUrl: 'app/partials/show-jobs.html',
        controller: 'ShowJobsCtrl'
      }).
      when('/login', {
        templateUrl: 'app/partials/login.html',
        controller: 'LoginCtrl'
      }).
      otherwise({
        redirectTo: '/quotes'
      });
  }]);