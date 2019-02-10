console.log('Server starting');

var articles = {
	test:'Just a test article',
	hello:'test2'
	
	
	
}

var express = require('express');

var app = express();

var server = app.listen(3000, () =>{
	console.log('Server listening');

});

app.use(express.static('public'));

// route for /all
//app.get('/search/:flower', (request, response) =>{
//	var data = request.params;
//	
//response.send();
//});


app.get('/all', (request, response) =>{
	
	
response.send(articles);
});


app.get('/search/:article', (request, response) =>{
var name = request.params.article;
	if(articles[name]){
		var reply ={
			articleName:name,
			content:articles[name]
			
		}
		
		
	} else{
		var reply = {
			msg:'Article not found'
		}
		
	}
	response.send(reply);

});