"use strict";angular.module("flickrSearcher",["ngAnimate","ngMessages"]).config(function(s){s.defaults.useXDomain=!0}).controller("mainController",["$http",function(s){var r=this;r.searchingMessage=!1,r.resultsMessage=!1,r.dataSuccess=!1,r.dataError=!1,r.results=[],r.trustSrc=function(s){return $sce.trustAsResourceUrl(s)},r.flickrSearchSubmit=function(s){r.results=[],r.searchingMessage=!0,r.resultsMessage=!1,r.dataSuccess=!1,r.dataError=!1,e(s),s.$setPristine()};var e=function(e){var t="https://api.flickr.com/services/rest",c="0ea305bbfa364ccf9948e4e6ac2537a1",a=r.searchTerm,n={method:"flickr.photos.search",api_key:c,tags:a,format:"json",nojsoncallback:1};s({url:t,method:"GET",params:n}).success(function(s){console.log("success"),console.log(s),r.dataSuccess=!0,o(s)}).error(function(s){console.log("error"),console.log(s),r.dataError=!0})},o=function(s){for(var e=s.photos.photo,o="q",t=0;t<s.photos.photo.length;t++){var c=e[t].farm,a=e[t].server,n=e[t].id,l=e[t].secret,u="https://farm"+c+".staticflickr.com/"+a+"/"+n+"_"+l+"_"+o+".jpg";r.results.push(u)}console.log(r.results)}}]);