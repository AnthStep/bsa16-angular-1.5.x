var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var server = app.listen(1234);


var staticDir = path.normalize(__dirname + '/../frontend/');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(staticDir));







