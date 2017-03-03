'use strict';

var App = angular.module('App',
                         ['angularFileUpload'])
        .config(['$routeProvider', '$locationProvider', function($routeProvider) {
            $routeProvider
                .otherwise({
                    redirectTo: '/'
                });
        }]);

App.directive('activeLink', ['$location', function(location) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            var clazz = attrs.activeLink;
            var path = $(element).find('a').attr('href').substring(1);

            scope.location = location;
            scope.$watch('location.path()', function(newPath) {
                if (path === newPath) {
                    element.addClass(clazz);
                } else {
                    element.removeClass(clazz);
                }
            });
        }
    };
}]);

