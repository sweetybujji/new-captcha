var express = require('express');
var app = express();
var svgCaptcha = require('svg-captcha');

var path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.get('/captcha', function (req, res) {
	var captcha = svgCaptcha.create();
	console.log(captcha)
	//req.session.captcha = captcha.text;
	
	res.type('svg');
	res.status(200).send(captcha.data);
});



app.listen(8090, (err,connect) => {
    if(err) console.log(err);
    else console.log(`Server started on port`,8090);
 });