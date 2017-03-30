angular.module('myApp', []).controller('userCtrl', function($scope) {
    $scope.fName = '';
    $scope.lName = '';
    $scope.passw1 = '';
    $scope.passw2 = '';
    $scope.users = [{
            id: 1,
            fName: 'Hege',
            lName: "Pege"
        },
        {
            id: 2,
            fName: 'Kim',
            lName: "Pim"
        },
        {
            id: 3,
            fName: 'Sal',
            lName: "Smith"
        },
        {
            id: 4,
            fName: 'Jack',
            lName: "Jones"
        },
        {
            id: 5,
            fName: 'John',
            lName: "Doe"
        },
        {
            id: 6,
            fName: 'Peter',
            lName: "Pan"
        }
    ];
    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;

    $scope.editUser = function(id) {
        if (id == 'new') {
            $scope.edit = true;
            $scope.incomplete = true;
            $scope.fName = '';
            $scope.lName = '';
        } else {
            $scope.edit = false;
            $scope.fName = $scope.users[id - 1].fName;

            $scope.lName = $scope.users[id - 1].lName;
        }
    };

    $scope.$watch('passw1', function() {
        $scope.test();
    });
    $scope.$watch('passw2', function() {
        $scope.test();
    });
    $scope.$watch('fName', function() {
        $scope.test();
    });
    $scope.$watch('lName', function() {
        $scope.test();
    });

    $scope.test = function() {
        if ($scope.passw1 !== $scope.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ($scope.edit && (!$scope.fName.length ||
                !$scope.lName.length ||
                !$scope.passw1.length || !$scope.passw2.length)) {
            $scope.incomplete = true;
        }
    };

});















var app = angular.module("myApp", []);

app.service("products",
function() {
	return [{
		id: 1,
		name: "iphone",
		price: 5000
	},
	{
		id: 2,
		name: "iphone 4",
		price: 1993
	},
	{
		id: 3,
		name: "iphone 5",
		price: 2893
	},
	{
		id: 4,
		name: "iphone 6",
		price: 4500
	}];
});

app.controller("productController",
function($scope, products) {
	$scope.products = products; //Angular自动注入
	//排序条件
	$scope.order = "-"; //默认是升序,-表示降序
	$scope.orderType = "id"; //以id来排序,不能直接在页面以id这个字段排序
	$scope.changeOrder = function(type) {
		$scope.orderType = type;
		//如果本来是降序，就变为升序，如果是升序，就变为降序
		if ($scope.order === '') {
			$scope.order = '-';
		} else {
			$scope.order = '';
		}
	}
});
