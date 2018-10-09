// importar
const express = require('express');
const http = require('http');
const reload = require('reload');
const bodyParser =require('body-parser');
const routes = require('./routes');



// instanciar exprres
var app = express();


//port
app.set('port',process.env.PORT || 3001);


//enlazando rutas

app.use(routes);


//bodyParser

app.use( bodyParser. urlencoded ( { extended : false } )) ;
app.use(bodyParser. json ());
 

// LENVATANDO SERVIDOR

const server = http.createServer(app);



reload(app)

server.listen(app.get('port'),()=>{
    console.log(`Servidor funcionando ${app.get('port')}`);
});


