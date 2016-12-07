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
          [{ "name":"Agile Farmer",  "cash":0,  "online":true},{ "name":"Anonymous",  "cash":4560,  "online":false},{ "name":"Datadriven",  "cash":2060,  "online":false},{ "name":"FlashPuffins",  "cash":6200,  "online":false},{ "name":"GiveUsAnother10Minutes",  "cash":19390,  "online":false},{ "name":"Licence-2-Code",  "cash":4190,  "online":false},{ "name":"Mr.Roboot",  "cash":27625,  "online":false},{ "name":"NetworkIssues",  "cash":1015,  "online":false},{ "name":"PTDDKings",  "cash":1045,  "online":false},{ "name":"React Team",  "cash":3240,  "online":false},{ "name":"Shifting_Shadows",  "cash":17285,  "online":false},{ "name":"Sky",  "cash":1635,  "online":true},{ "name":"Team007",  "cash":10450,  "online":true},{ "name":"The Collabs",  "cash":2970,  "online":false},{ "name":"UnexpectedChallenger",  "cash":-55,  "online":false},{ "name":"bot_shadows",  "cash":0,  "online":false},{ "name":"fs_Society",  "cash":-15,  "online":false},{ "name":"hugun",  "cash":6640,  "online":false},{ "name":"losse",  "cash":0,  "online":true},{ "name":"the-kittens",  "cash":6370,  "online":false}]


      $scope.tables = [];

      // Define yourobject.
      var myResource = $resource("/sellers");

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

        console.log('🐼🐼🐼🐼🐼 -- Result from server : ', sellers)
      });
  };

})();
