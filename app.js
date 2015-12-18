angular.module("app", [
        'ngRoute',
        'ngMessages',
        'ngAnimate',
        'ngAria',
        'ui.bootstrap',
        'app.controllers',
        'app.services'
    ])
    .config(['$routeProvider', function($routeProvider) {
        for (var i in registered.routes) {
            $routeProvider.when(registered.routes[i].when, {
                templateUrl: registered.routes[i].templateUrl,
                controller: registered.routes[i].controller,
                controllerAs: registered.routes[i].controllerAs
            });
        }

        //otherwise
        $routeProvider.otherwise(registered.routes[0].when, {
            templateUrl: registered.routes[0].templateUrl,
            controller: registered.routes[0].controller,
            controllerAs: registered.routes[0].controllerAs
        });

    }]);
