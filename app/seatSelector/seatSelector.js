'use strict';

angular.module('myApp.seatSelector', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/seatSelection', {
    templateUrl: 'seatSelector/seatSelector.html',
    controller: 'seatSelectorCtrl'
  });
}])
.controller('seatSelectorCtrl', ['$scope', function ($scope) {
  $scope.selectedSeats = [];
  // Status --> AVAIL,BOOKED,TOBE_BOOKED,INACTIVE
  $scope.seatMapper = [
    [
      {
        id: 'A1',
        status: 'AVAIL',
      }, {
      id: 'A2',
      status: 'AVAIL',
    }, {
      id: 'A3',
      status: 'AVAIL',
    }, {
      id: 'A4',
      status: 'AVAIL',
    }, {
      id: 'A5',
      status: 'AVAIL',
    }, {
      id: 'A6',
      status: 'AVAIL',
    }, {
      id: 'A7',
      status: 'AVAIL',
    }, {
      id: 'A8',
      status: 'AVAIL',
    }, {
      id: 'A9',
      status: 'AVAIL',
    }, {
      id: 'A10',
      status: 'AVAIL',
    }, {
      id: 'A11',
      status: 'AVAIL',
    }, {
      id: 'A12',
      status: 'AVAIL',
    }
    ],
    [
      {
        id: 'B1',
        status: 'BOOKED',
      }, {
      id: 'B2',
      status: 'BOOKED',
    }, {
      id: 'B3',
      status: 'AVAIL',
    }, {
      id: 'B4',
      status: 'AVAIL',
    }, {
      id: 'B5',
      status: 'AVAIL',
    }, {
      id: 'B6',
      status: 'AVAIL',
    }, {
      id: 'B7',
      status: 'INACTIVE',
    }, {
      id: 'B8',
      status: 'BOOKED',
    }, {
      id: 'B9',
      status: 'AVAIL',
    }, {
      id: 'B10',
      status: 'AVAIL',
    }, {
      id: 'B11',
      status: 'AVAIL',
    }, {
      id: 'B12',
      status: 'AVAIL',
    }
    ],
    [
      {
        id: 'C1',
        status: 'AVAIL',
      }, {
      id: 'C2',
      status: 'AVAIL',
    }, {
      id: 'C3',
      status: 'AVAIL',
    }, {
      id: 'C4',
      status: 'AVAIL',
    }, {
      id: 'C5',
      status: 'AVAIL',
    }, {
      id: 'C6',
      status: 'AVAIL',
    }, {
      id: 'C7',
      status: 'INACTIVE',
    }, {
      id: 'C8',
      status: 'AVAIL',
    }, {
      id: 'C9',
      status: 'AVAIL',
    }, {
      id: 'C10',
      status: 'AVAIL',
    }, {
      id: 'C11',
      status: 'AVAIL',
    }, {
      id: 'C12',
      status: 'AVAIL',
    }
    ],
    [
      {
        id: 'D1',
        status: 'AVAIL',
      }, {
      id: 'D2',
      status: 'BOOKED',
    }, {
      id: 'D3',
      status: 'AVAIL',
    }, {
      id: 'D4',
      status: 'AVAIL',
    }, {
      id: 'D5',
      status: 'AVAIL',
    }, {
      id: 'D6',
      status: 'BOOKED',
    }, {
      id: 'D7',
      status: 'AVAIL',
    }, {
      id: 'D8',
      status: 'AVAIL',
    }, {
      id: 'D9',
      status: 'INACTIVE',
    }, {
      id: 'D10',
      status: 'AVAIL',
    }, {
      id: 'D11',
      status: 'BOOKED',
    }, {
      id: 'D12',
      status: 'AVAIL',
    }
    ]
  ];
  $scope.bookSeat = function (seatId) {
    $scope.selectedSeats.push(seatId);
  };
  $scope.unBookSeat = function (seatId) {
    $scope.selectedSeats.splice($scope.selectedSeats.indexOf(seatId), 1);
  }
}])
.directive('seatSelector', function () {
  return {
    restrict: 'E',
    scope: {
      seat: '=seat',
      bookSeat: "&",
      unBookSeat: "&"
    },
    controller: ['$scope', function ($scope) {
      $scope.updateSeatStatus = function () {
        if ($scope.seat.status === 'AVAIL') {
          $scope.seat.status = 'TOBE_BOOKED';
          $scope.bookSeat();
        } else if ($scope.seat.status === 'TOBE_BOOKED') {
          $scope.seat.status = 'AVAIL';
          $scope.unBookSeat();
        }
      };
    }],
    template: '<span class="theater-seat" ng-class="{\'seat-avail\': seat.status == \'AVAIL\',\'seat-booked\': seat.status == \'BOOKED\',\'seat-inactive\': seat.status == \'INACTIVE\',\'seat-tobook\': seat.status == \'TOBE_BOOKED\'}" ng-click="updateSeatStatus()">{{seat.id}}</span>'
  };
});