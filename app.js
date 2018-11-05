const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
var app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname,'/node/modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname,"/node_modules/popper.js/dist")));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views/index.html'));

});

app.listen(3000, function(){
    debug(`listening on port ${chalk.green('3000')}`);
});

//$env:DEBUG = "*";node app.js
//$env:DEBUG = "app";node app.js