var route = angular.module('myApp', ['ui.router', 'ui.bootstrap']);
route.directive('appTest', function () {
  return {
      template: function () {
          $('.main-menu').click(function () {
            $(this).addClass('main-menu-click')
            $('.main-icon').css('-webkit-transform','rotate(180deg)')
          })
          // $('.main-menu-click').click(function () {
          //   $('.main-menu-click').removeClass('main-menu-click')
          //   $('.main-icon').removeClass('main-icon-click')
          // })
      }
  };
})
route.config(["$stateProvider","$urlRouterProvider", function ($stateProvider,$urlRouterProvider) {

    // $urlRouterProvider.otherwise('/pageTab');
    $stateProvider.state('pageTab',{
        url: '/pageTab',
        templateUrl: './pageTab.html'
      })
      .state('pageTab2',{
        url: '/page2',
        templateUrl: './pageTab2.html'
      })
      .state('pageTab.page1',{
        url: '/page1',
        templateUrl: './pages/page1.html'
      })
      .state('pageTab.page1.page1-1',{
        url: '/page1-1',
        templateUrl: './pages/page-inner/page1-1.html'
      })
      .state('pageTab.page1.page1-2',{
        url: '/page1-2',
        templateUrl: './pages/page-inner/page1-2.html'
      })
      .state('pageTab.page1.page1-3',{
        url: '/page1-3',
        templateUrl: './pages/page-inner/page1-3.html'
      })
      .state('pageTab.page1.page1-4',{
        url: '/page1-4',
        templateUrl: './pages/page-inner/page1-4.html'
      })
      .state('pageTab.page1.page1-5',{
        url: '/page1-5',
        templateUrl: './pages/page-inner/page1-5.html'
      })
      .state('pageTab.page2',{
        url: '/page2',
        templateUrl: './pages/page2.html'
      })
      .state('pageTab.page3',{
        url: '/page3',
        templateUrl: './pages/page3.html'
      })
}]);
