(function() {
    'use strict';
    
    angular
        .module("TicketPortal")
        .factory("UserFactory", userFactory);
    
    userFactory.$inject = ['$http', '$q'];
    
    function userFactory($http, $q){
        var deferred = $q.defer();
        
        return {
            getUserList: getUserList
        };
        
        function callSuccess(response){
            deferred.resolve(response.data);
            return deferred.promise;
        }
        
        function callError(error){
            deferred.reject(error);
            return deferred.reject;
        }
        
        function getUserList(){
            var userList = $http({
                method: 'GET',
                url: 'UserList'
            });
            
            return userList.then(callSuccess, callError);
        }
    }
}());