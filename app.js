// Define the `phonecatApp` module
let singleApp = angular.module('singleApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
singleApp.controller('trailerController', function trailerController($scope, $http) {
  let request = $('h1').text() + 'trailer FR';
  console.log(request);

  $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ request +'&key=AIzaSyBo6GWJnzMlR_M4WQOQGYBcZ2lU_Lgw2LQ').then(function(response) {
            let zipCodes = response.data;
            $scope.videoId = zipCodes.items[0].id.videoId;
          });
});
