var user = function(app, urlEncodedParser, dbOpperations){
    return {
        create : create,
        listAll : listAll
    };
    
    function create(){
        app.post('/CreateUser', urlEncodedParser, function(request, response){
            var userData = {
                firstName : request.body.firstName,
                lastName : request.body.lastName,
                email : request.body.email,
                password : request.body.password,
                role : request.body.role
            };
            
           dbOpperations.saveData(userData, 'UserTable');
        });
    }
    
    function listAll(){
        app.get('/UserList', function(request, response){
            console.log(request);
            dbOpperations.getData('UserTable', function(data){
                response.end(JSON.stringify(data));
            });
        });
    }
}

module.exports = user;