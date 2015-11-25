var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	fs = require('fs');

var app = express();

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