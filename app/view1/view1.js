(function() {

  'use strict';

  angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])
  .controller('View1Ctrl', View1Ctrl);

  View1Ctrl.$inject = ['$scope', '$resource', 'poller'];

  function View1Ctrl($scope, $resource, poller) {

      $scope.sellers = [];

      // Define your resource object.
      var myResource = $resource("http://192.168.85.103:8080/sellers");

      // Get poller. This also starts/restarts poller.
      var myPoller = poller.get(myResource, { action: 'query' });

      // Update view. Since a promise can only be resolved or rejected once but we want
      // to keep track of all requests, poller service uses the notifyCallback. By default
      // poller only gets notified of success responses.
      myPoller.promise.then(null, null, function(res){
        // 1. reset the array while keeping its reference
        $scope.sellers.length = 0;
        // 2. fill the first array with items from the second
        [].push.apply($scope.sellers.length, res);
        console.log('🐼🐼🐼🐼🐼 -- Result from server : ', res)
      });
  };

})();
