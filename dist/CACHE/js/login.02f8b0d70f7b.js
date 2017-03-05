
App.run(['$templateCache', function($templateCache) {
    $templateCache.put("/static/views/login.html", "<form class=\"form-signin\" ng-submit=\"login()\">\n  <h2 class=\"form-signin-heading\">Please sign in</h2>\n  <div class=\"alert alert-error\" ng-show=\"error\">\n    Wrong username/password.\n  </div>\n  <input name=\"username\" type=\"text\" class=\"input-block-level\" placeholder=\"Email address\" ng-model=\"username\">\n  <input name=\"password\" type=\"password\" class=\"input-block-level\" placeholder=\"Password\" ng-model=\"password\">\n  <label class=\"checkbox\">\n    <input type=\"checkbox\" value=\"remember-me\"> Remember me\n  </label>\n  <button class=\"btn btn-large btn-primary\" type=\"submit\" id=\"signin\">Sign in</button>\n</form>");
}]);
