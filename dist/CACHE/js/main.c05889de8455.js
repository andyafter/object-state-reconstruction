
App.run(['$templateCache', function($templateCache) {
    $templateCache.put("/static/views/main.html", "<div class=\"hero-unit\">\n  <h1>Cheerio!</h1>\n  <p>You now have</p>\n  <ul>\n      <li ng-repeat=\"thing in awesomeThings\">{{thing}}</li>\n  </ul>\n  <p>installed.</p>\n  <h3>Enjoy coding! - James</h3>\n</div>\n");
}]);
