angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

   
    $scope.addListing = function() {
      $scope.listings.push($scope.listing);
      $scope.listing = "";
    };
    $scope.deleteListing = function(index) {
      for(i in $scope.listings){
        if(index.code == $scope.listings[i].code){
          $scope.listings.splice(i, 1);// Don't show detailed info of a deleted (non-existing) listing in the list.
          if($scope.detailedInfo == index){
            $scope.detailedInfo = undefined;
          }
        }
      }
      return;
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = index;
      return;
    };
  }
]);