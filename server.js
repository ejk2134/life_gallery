var express = require('express');
var bodyParser = require('body-parser');

//routers
var indexRouter = require('./routes/index.js');
//call express to declare app variable
var app = express();
//implement modules
app.use(express.static('public'));
app.use('/', indexRouter);

var port = 3000;

app.listen(port, function(){
    console.log('listening on port', port);
})