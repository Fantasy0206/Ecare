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

route.controller('pageTab', function ($scope) {
  $scope.type = '';
  $scope.name = '';
  $scope.unit = '';
  $scope.remaks = '';
  $scope.isShow = true;
  $scope.isRead = false;
  $scope.itemNames=[
    {
      Tname : '序号'
    },
    {
      Tname : '设备类型'
    },
    {
      Tname : '设备名称'
    },
    {
      Tname : '设备参数'
    },
    {
      Tname : '备注'
    }
  ];
  $scope.items = [
    {
      id : '1',
      num : '1',
      type : '参数一',
      name : '名称一',
      unit : '单位一',
      remarks : '备注一'
    },
    {
      id : '2',
      num : '2',
      type : '参数二',
      name : '名称二',
      unit : '单位二',
      remarks : '备注二'
    },
    {
      id : '3',
      num : '3',
      type : '参数三',
      name : '名称三',
      unit : '单位三',
      remarks : '备注三'
    },
    {
      id : '4',
      num : '4',
      type : '参数四',
      name : '名称四',
      unit : '单位四',
      remarks : '备注四'
    },
    {
      id : '5',
      num : '5',
      type : '参数五',
      name : '名称五',
      unit : '单位五',
      remarks : '备注五'
    },
    {
      id : '6',
      num : '6',
      type : '参数六',
      name : '名称六',
      unit : '单位六',
      remarks : '备注六'
    },
    {
      id : '7',
      num : '7',
      type : '参数七',
      name : '名称七',
      unit : '单位七',
      remarks : '备注七'
    },
    {
      id : '8',
      num : '8',
      type : '参数八',
      name : '名称八',
      unit : '单位八',
      remarks : '备注八'
    }
  ];

  // 查看
  $scope.edit = function (id) {
    if(id == 'add'){
      $scope.isRead = false;
      $scope.isShow = !$scope.isShow;
      $scope.type = '';
      $scope.unit = '';
      $scope.name = '';
      $scope.remarks = '';
    }
    else {
      $scope.isRead = true;
      $scope.isShow = !$scope.isShow;
      $scope.type = $scope.items[id-1].type;
      $scope.unit = $scope.items[id-1].unit;
      $scope.name = $scope.items[id-1].name;
      $scope.remarks = $scope.items[id-1].remarks;
    }
  }

  // 返回
  $scope.return = function () {
    $scope.isShow = !$scope.isShow;
  }

  // 保存
  $scope.save = function () {
    $scope.isShow = !$scope.isShow;
    $scope.items.push({
      'type': $scope.type,
      'name': $scope.name,
      'unit': $scope.unit,
      'remarks': $scope.remarks,
    })
  }

  // 删除
  $scope.delete = function (id) {
    $scope.items.splice(id-1,1)
  }

  // 查找
  $scope.search = function () {

  }

  //修改
  $scope.edit = {
    $scope.isRead = true;
    $scope.isShow = !$scope.isShow;
    $scope.type = $scope.items[id-1].type;
    $scope.unit = $scope.items[id-1].unit;
    $scope.name = $scope.items[id-1].name;
    $scope.remarks = $scope.items[id-1].remarks;
  }
})




route.config(["$stateProvider","$urlRouterProvider", function ($stateProvider,$urlRouterProvider) {
    // $urlRouterProvider.otherwise('/pageTab');
    $stateProvider.state('pageTab',{
        url: '/pageTab',
        templateUrl: './pageTab.html',
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
