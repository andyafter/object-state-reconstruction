
App.run(['$templateCache', function($templateCache) {
    $templateCache.put("/static/views/main.html", "<div class=\"hero-unit\">\n  <form name=\"upload\" class=\"form\" data-ng-submit=\"addFile()\">\n      <input type=\"file\" name=\"file\" multiple \n             onchange=\"angular.element(this).scope().uploadedFile(this)\" />\n      <button type=\"submit\">Upload </button>\n  </form>\n</div>\n");
}]);
