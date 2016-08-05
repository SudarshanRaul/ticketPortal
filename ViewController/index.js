var view = function(app){
    return {
        defaultView : defaultView,
    };
    
    function defaultView(){
        app.get('/', function(request, response){
            response.sendFile('index.html');
        });
    }
}

module.exports = view;