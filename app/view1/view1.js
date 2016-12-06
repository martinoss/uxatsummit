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

  View1Ctrl.$inject = ['$scope', '$resource', 'poller', 'teamService'];

  function View1Ctrl($scope, $resource, poller, teamService) {

      var sellers =
          [{"name":"Agile Farmer","cash":-1015.0,"online":false},{"name":"Anonymous","cash":-30.0,"online":true},{"name":"DataDriven","cash":-45.0,"online":true},{"name":"FlashPuffins","cash":-1935.0,"online":false},{"name":"GiveUsAnother10Minutes","cash":-1420.0,"online":false},{"name":"Licence-2-Kill","cash":1703.0,"online":true},{"name":"Losse","cash":-2370.0,"online":false},{"name":"MaskedCoach","cash":-2100.0,"online":false},{"name":"Mr.Reboot","cash":-515.0,"online":false},{"name":"MuehlenKoelsch","cash":-2415.0,"online":false},{"name":"NetworkIssues","cash":3986.0,"online":true},{"name":"NetworkIssuesScala","cash":455.0,"online":true},{"name":"React Team","cash":35.0,"online":true},{"name":"Shifting Shadows","cash":-255.0,"online":true},{"name":"Team007","cash":-49.0,"online":true},{"name":"TeamIronMan","cash":2824.0,"online":true},{"name":"The Collabs","cash":270.0,"online":true},{"name":"fs_society","cash":-480.0,"online":true},{"name":"hugun","cash":-1075.0,"online":false},{"name":"the-kittens","cash":-630.0,"online":false}];


      $scope.tables = [];

      // Define your resource object.
      var myResource = $resource("http://192.168.85.103:8080/sellers");

      // Get poller. This also starts/restarts poller.
      var myPoller = poller.get(myResource, { action: 'query' });

      // Update view. Since a promise can only be resolved or rejected once but we want
      // to keep track of all requests, poller service uses the notifyCallback. By default
      // poller only gets notified of success responses.
      myPoller.promise.then(null, null, function(sellers){

        var mapped = teamService.getOrderedTables(sellers);
        // 1. reset the array while keeping its reference
        $scope.tables.length = 0;
        // 2. fill the first array with items from the second
        [].push.apply($scope.tables, mapped);

        console.log('🐼🐼🐼🐼🐼 -- Result from server : ', res)
      });
  };

})();
