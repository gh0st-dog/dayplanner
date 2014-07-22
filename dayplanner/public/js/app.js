/**
 * Created by buyvich on 22.07.14.
 */


app = angular.module("dayplanner", []);

app.config(function($interpolateProvider, $httpProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
