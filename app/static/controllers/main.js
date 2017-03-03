'use strict';

App.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/views/main.html',
            controller: 'MainCtrl'
        });
}]);

App.controller('MainCtrl', ['$scope', 'FileUploader', function($scope, FileUploader) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Testacular',
        'django-restframework',
        'django-south',
        'django-compressor'
    ];

    $scope.uploader = new FileUploader();
}]);
