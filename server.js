var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	fs = require('fs')
	React = require('react'),
	ReactDOMServer = require('react-dom/server'),
	expHbs = require('express-handlebars');
	require('babel/register');
var MyComponent = React.createFactory(require('./client/reactServer/components/MyComponent.js').MyComponent);

var app = express();

app.set('views', path.join(__dirname, 'client/reactServer/views/'));
app.engine('handlebars', expHbs({defaultLayout: '../../client/reactServer/views/layouts/main'}));
app.set('view engine', 'handlebars');


var PRODUCTS_FILE = path.join(__dirname, '/data/products.json');
//set port
app.set('port', (process.env.PORT || 3000));

//set static path
app.use('/', express.static(path.join(__dirname, 'client')));
app.use('/libs', express.static(path.join(__dirname, 'libs')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/first', express.static(path.join(__dirname, 'client/firstComponent')));
app.use('/form', express.static(path.join(__dirname, 'client/regForm')));
app.use('/life', express.static(path.join(__dirname, 'client/lifeCycle')));
app.use('/props', express.static(path.join(__dirname, 'client/props')));
app.use('/state', express.static(path.join(__dirname, 'client/nav')));
app.use('/ajax', express.static(path.join(__dirname, 'client/ajax')));
app.use('/animation', express.static(path.join(__dirname, 'client/animation')));
app.use('/bind', express.static(path.join(__dirname, 'client/dataBinding')));

var markup = ReactDOMServer.renderToString(MyComponent());
app.get('/reactServer', function(req, res){
	res.render('home',{
		markup: markup
	});
});

app.use('/gulp', express.static(path.join(__dirname, 'client/gulp-react')));


//BOdyPArser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//get Products
app.get('/api/products', function(req, res){
	fs.readFile(PRODUCTS_FILE, function(err, data){
		res.setHeader('Cache-Control', 'no-cache');
		res.json(JSON.parse(data));
	});
});

//add products
app.post('/api/products', function(req, res){
	fs.readFile(PRODUCTS_FILE, function(err, data){
		var products = JSON.parse(data);
		products.push(req.body);
		fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 3), function(err){
			res.setHeader('Cache-Control', 'no-cache');
			res.json(products);
		});
	});
});



//Start server
app.listen(app.get('port'), function(){
	console.log('Server has Started : http:localhost:%s', app.get('port'));
});