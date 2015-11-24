var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');

var app = express();

//set port
app.set('port', (process.env.PORT || 3000));

//set static path
app.use('/', express.static(path.join(__dirname, 'client')));
app.use('/first', express.static(path.join(__dirname, 'firstComponent')));
//BOdyPArser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Start server
app.listen(app.get('port'), function(){
	console.log('Server has Started : http:localhost:%s', app.get('port'));
});