var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

var blocks = require('./routes/blocks');
app.use('/blocks',blocks);

app.use(express.static('public'));

app.route('/')
	.get(function(request,response){
		response.sendFile(__dirname +'/public/index.html');
	});


app.listen(3000,function(){
	console.log("Node is listening on port 3000");
});



/*app.param('name',function(request,response,next){
	var name = request.params.name;
	var block = name[0].toUpperCase()+name.slice(1).toLowerCase();
	request.blockName = block;
	next();
});*/



/*app.get('/',function(request,response){
	response.send("Hello Dog !!");
	//response.write("Hello Dog");
	//response.end();
});*/


/*app.get('/blocks',function(request,response){
	var blocks = ['Fixed','Movable','Rotating'];
	//var blocks = '<ul><li>Fixed</li><li>Movable</li></ul>';
	response.json(blocks);
	//response.send(blocks);
	//response.redirect(301,'/ports');
});*/