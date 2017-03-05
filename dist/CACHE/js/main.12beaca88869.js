
App.run(['$templateCache', function($templateCache) {
    $templateCache.put("/static/views/main.html", "<div class=\"hero-unit\">\n    <div ng-controller = \"MainCtrl\">\n        <input type = \"file\" file-model = \"myFile\"/>\n        <button ng-click = \"uploadFile()\">Upload File</button>\n    </div>\n</div>\n");
}]);
