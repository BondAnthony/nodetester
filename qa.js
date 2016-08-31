var express = require('express');
var app = express();
var log4js = require('log4js');
var bodyParser = require('body-parser');
var os = require('os');

//Setup logging
global.logger = log4js.getLogger();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Pull env port or default to 3001
var port = process.env.port || 3001
//Get hostname
var hostname = os.hostname();

var version = require('./routes/version.js')(app);

var server = app.listen(port, function(){
    logger.info('Server running at http://' + hostname + ':' + port + '/');
})
