(function() {

'use strict';

angular
  .module('myApp.view1', ['ngRoute', 'ngResource', 'emguo.poller'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl',
      
    });
  }])
  .controller('View1Ctrl', View1Ctrl);

  View1Ctrl.$inject = ['$scope', 'poller'];

  function View1Ctrl($scope, poller) {
    // Define your resource object.
    var myResource = $resource('http://192.168.1.1:3000');

    // Get poller. This also starts/restarts poller.
    var myPoller = poller.get(myResource);

    // Update view. Since a promise can only be resolved or rejected once but we want
    // to keep track of all requests, poller service uses the notifyCallback. By default
    // poller only gets notified of success responses.
    myPoller.promise.then(null, null, polled);

    // Stop poller.
    myPoller.stop();

    // Restart poller.
    myPoller.restart();

    // Remove poller.
    myPoller.remove();

    function polled() {
        console.log('polled');
    }

  }


})();