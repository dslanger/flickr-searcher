'use strict';

angular.module('flickrSearcher', ['ngAnimate'])
  .controller('mainController', ['$http', function($http) {
    var vm = this;
    vm.searchingMessage = false;
    vm.resultsMessage = false;
    vm.dataSuccess = false;
    vm.dataError = false;
    vm.results = [];

    vm.flickrSearchSubmit = function(form, response) {
      vm.results = [];
      vm.searchingMessage = true;
      vm.resultsMessage = false;
      vm.dataSuccess = false;
      vm.dataError = false;
      getTheData(form);
      // how can I put this function here and not in getTheData()?
      // showTheResults(response);
    };

    var getTheData = function(form) {
      var url = 'https://api.flickr.com/services/rest';
      var api_key = '0ea305bbfa364ccf9948e4e6ac2537a1';
      var search_tag = vm.searchTerm;
      var params = {
        method: 'flickr.photos.search',
        api_key: api_key,
        tags: search_tag,
        format: 'json',
        nojsoncallback: 1
      };
      $http({
        url: url,
        method: 'GET',
        params: params
      })
      .success(function(response) {
        console.log('success');
        console.log(response);
        vm.dataSuccess = true;
        showTheResults(response);
      })
      .error(function(response) {
        console.log('error');
        console.log(response);
        vm.dataError = true;
      });
    };

    var showTheResults = function(response) {
      var photoObj = response.photos.photo;
      //var allTheURLS = vm.results;
      for (var i = 0; i < response.photos.photo.length; i++) {
        var farm = photoObj[i].farm;
        var server = photoObj[i].server;
        var id = photoObj[i].id;
        var secret = photoObj[i].secret;
        var photoURL = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
        //var photoURL = farmO + 'test' + serverO + 'test';
        vm.results.push(photoURL);
      }
      console.log(vm.results);
    };

  }]);
