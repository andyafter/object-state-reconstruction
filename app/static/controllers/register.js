'use strict';


App.controller('RegistrationCtrl', function($scope, $http, $location, $rootScope) {
  $scope.register = function() {
    $scope.error = false;
    $scope.loading = true;

    $http.post('/register', {username: $scope.username, email: $scope.email, password: $scope.password}).
        success(function(user, status) {
          $rootScope.user = user;
          App.config(['$httpProvider', function($httpProvider) {   
            $httpProvider.defaults.headers.common['Authorization'] = 'Token ' + user.api_key;
          }]);

          $location.path("/");
        }).
        error(function(data, status) {
          $scope.error = true;
          $scope.loading = false;
        });
  };
});
