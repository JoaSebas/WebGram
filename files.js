const express = require('express');



var modulo = express();

//config files js and css and img
modulo.use('/img',express.static(__dirname+'/public/img'));
modulo.use('/js',express.static(__dirname+'/public/js'));
modulo.use('/css',express.static(__dirname+'/public/css'));
modulo.use('/favicon.ico',express.static(__dirname+'/public/favicon.ico'));

module.exports = modulo;
