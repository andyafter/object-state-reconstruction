
App.run(['$templateCache', function($templateCache) {
    $templateCache.put("/static/views/main.html", "<div class=\"hero-unit\">\n    <div ng-controller = \"MainCtrl\">\n        <input type=\"file\" nv-file-select uploader=\"uploader\" url=\"/upload\"/><br/>\n        <ul>\n            <li ng-repeat=\"item in uploader.queue\">\n                Name: <span ng-bind=\"item.file.name\"></span><br/>\n                <button ng-click=\"item.upload()\">upload</button>\n            </li>\n        </ul>\n    </div>\n</div>\n");
}]);
