/*
Including the dependent npm modules
*/
var express = require('express');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var objectId = require('mongodb').ObjectID;

var dbUrl = 'mongodb://localhost:27017/test';
var app = express();
app.use(express.static('public'));
var urlEncodedParser = bodyParser.urlencoded({extend: false});
app.use(urlEncodedParser);

/*
Including custom modules
*/
var dbOpperations = require('./dbOpperation/index.js')(mongoClient, assert, objectId, dbUrl);
var user = require('./User/index.js')(app, urlEncodedParser, dbOpperations);
var views = require('./ViewController/index.js')(app);

/*
Test db connection
*/
dbOpperations.testConnection();

/*
Create a user
*/
user.create();
user.listAll();

/*
Views
*/
views.defaultView();


/*
Starting the server
*/
var server = app.listen(9999, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});