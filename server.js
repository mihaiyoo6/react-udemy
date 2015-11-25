var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');

var app = express();

//set port
app.set('port', (process.env.PORT || 3000));

//set static path
app.use('/', express.static(path.join(__dirname, 'client')));
app.use('/libs', express.static(path.join(__dirname, 'libs')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/first', express.static(path.join(__dirname, 'firstComponent')));
app.use('/form', express.static(path.join(__dirname, 'regForm')));
app.use('/life', express.static(path.join(__dirname, 'lifeCycle')));
app.use('/props', express.static(path.join(__dirname, 'props')));
app.use('/state', express.static(path.join(__dirname, 'nav')));
//BOdyPArser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Start server
app.listen(app.get('port'), function(){
	console.log('Server has Started : http:localhost:%s', app.get('port'));
});