'use strict';

App.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/views/main.html',
            controller: 'MainCtrl'
        });
}]);

App.controller('MainCtrl', ['$scope' , 'FileUploader', '$http', function($scope, FileUploader, $http) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Testacular',
        'django-restframework',
        'django-south',
        'django-compressor'
    ];

    $scope.uploader = new FileUploader({
        url:"upload/"
    });

    $scope.uploader.onSuccessItem = function(fileItem, response, status, headers){
        console.info('onCompleteItem', fileItem, response, status, headers);
        //$scope.uoloader.clearQueue();
    };

    $scope.query = function(){
        console.log("some");
        var data = $.param({
            //fName: $scope.firstName,
            //lName: $scope.lastName
            object_id:1,
            timestamp: 148473055
        });
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http.post('/query', data, config)
            .success(function (data, status, headers, config) {
                //$scope.PostDataResponse = data;
                if(data=="none"){
                    console.log("herehere");
                }
                console.log(data);
                console.log(data.info);
                console.log(data.object_id);
            })
            .error(function (data, status, header, config) {
                console.log("something went wrong");
            });
    }
}]);
