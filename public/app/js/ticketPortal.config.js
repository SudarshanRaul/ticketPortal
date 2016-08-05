(function () {
    'use strict';
    
    angular
        .module("TicketPortal")
        .config(config);
    
    config.$inject = ['$routeProvider'];
    
    function config($routeProvider) {
        $routeProvider
            .when('/userList', {
                templateUrl: 'app/partials/userList.html',
                controller: 'UserCtrl',
                controllerAs: 'uc'
            });
    }
}());