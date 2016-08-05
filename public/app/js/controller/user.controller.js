(function () {
    'use strict';
    
    angular
        .module("TicketPortal")
        .controller("UserCtrl", userCtrl);
    
    userCtrl.$inject = ['UserFactory'];
    
    function userCtrl(UserFactory) {
        var uc = this;
        
        UserFactory
            .getUserList()
            .then(getUserListSuccess, getUserListFailed);
        
        function getUserListSuccess(response){
            uc.users = angular.fromJson(response);
            console.log(uc.users);
            console.log(typeof(uc.users));
        }
        
        function getUserListFailed(error){
            console.log(error);
        }
    }
}());