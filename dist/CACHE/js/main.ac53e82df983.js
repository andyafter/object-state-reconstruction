
App.run(['$templateCache', function($templateCache) {
    $templateCache.put("/static/views/main.html", "<div class=\"hero-unit\">\n    <div ng-controller = \"MainCtrl\">\n        <input name=\"myFile\" type=\"file\" />\n        <div\n            class=\"btn btn-primary btn-upload\"\n            url=\"/upload\"\n            on-success=\"onSuccess(response)\"\n        >Upload</div>\n    </div>\n</div>\n");
}]);
