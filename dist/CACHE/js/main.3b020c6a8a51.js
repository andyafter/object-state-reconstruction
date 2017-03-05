
App.run(['$templateCache', function($templateCache) {
    $templateCache.put("/static/views/main.html", "<div class=\"hero-unit\">\n    <div ng-controller = \"MainCtrl\">\n        <div\n            class=\"btn btn-primary btn-upload\"\n            upload-button\n            url=\"/upload\"\n            data=\"formData\"\n            on-success=\"onSuccess(response)\"\n            >Upload</div>\n    </div>\n</div>\n");
}]);
