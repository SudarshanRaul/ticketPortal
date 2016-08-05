var dbOpperations = function(mongoClient, assert, objectId, url){
    return {
        testConnection : testConnection,
        saveData : saveData,
        getData : getData
    };
    
    function testConnection(){
        mongoClient.connect(url, function(error, db){
            assert.equal(null, error);
            console.log('Test connection to db success.');
            db.close();
        });
    }
    
    function saveData(data, collection){
        mongoClient.connect(url, function(error, db){
            assert.equal(null, error);
            insertData(db, data, collection, function(){
                db.close();
            });
        });
    }
    
    function insertData(db, data, collection, callback){
        db.collection(collection).insertOne(data, function(error, result){
            assert.equal(null, error);
            console.log('Data inserted in db.');
            callback();
        });
    }
    
    function getData(collection, getDataSuccess){
        var responseData;
        mongoClient.connect(url, function(error, db){
            assert.equal(null, error);
            responseData = findData(db, collection, function(jsonData){
                getDataSuccess(jsonData);
                db.close();
            });
        });
    }
    
    function findData(db, collection, callback){
        var cursor = db.collection(collection).find();
        var jsonData = [];
        cursor.each(function(error, data){
            assert.equal(null, error);
            if(data !== null){
                jsonData.push(data);
            }else{
                callback(jsonData);
            }
        });
    }
};

module.exports = dbOpperations;