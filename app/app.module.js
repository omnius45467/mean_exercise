angular.module('app', [
    'templates',
    'ui.router',
    'welcome',
    'dashboard'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  })
  .run(function () {

  });