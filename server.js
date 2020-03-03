var express = require('express');
var app = express();
var port = 3000;
// app.get('/', function(req, res){
// res.send('hello express');
// });
var middleware = require('./middleware.js');
// var middleware={
// 	requiredAuthentication: function(req, res, next){
// 		console.log('private route hit');
// 		next();
// 	},
// 	logger: function(req, res, next){
// 		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' '  + req.originalUrl);
// 	}
// };
app.use(middleware.logger);

app.get('/about', middleware.requiredAuthentication,  function(req, res){
res.send('About Us');
});

app.use(express.static(__dirname + '/public'));


app.listen(port, function (){
	console.log('server started on port '+ port);
});