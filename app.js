'use strict';

angular.module('flickrSearcher', [])
  .controller('mainController', ['$http', function($http) {
    var vm = this;
    vm.searchingMessage = false;
    vm.resultsMessage = false;
    vm.results = [];
    vm.getStuffFunction = function() {
      $http.get('')
      .then(function(response) {

      },
      function(error) {
        console.log(error);
      });
    };

  }]);
