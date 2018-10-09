const express = require('express');
const path = require('path');
const files= require('./files');
const router = express.Router();

//enlazando archivos 

router.use(files);



//RUTAS----------------------AQUI-------
//--------------------------------------
var dir = path.join(__dirname, 'public');

//ruta raiz
router.get('/',(req,res)=>{
    
    res.sendFile(path.join(dir,'Index.html'));
});


//Contacto
router.get('/Contacto',(req,res)=>{
    
    res.sendFile(path.join(dir,'Contacto.html'));
});






//EVENTOS -------------------------------------------


var url = "https://example.com";
//solicitud del cliente a la api para envio de email
router.post('/sendMail',(req,res)=>{


    //cliente de la pagina

    /*  EXAMPLE CLIENTE
     
        Nombre: "Mary Pau"
        Correo: "contratos@marypau.com"
        TemplateId: "dc9921fa-f3a7-4fbb-9001-ae290d55bf88"
        Subject: "Contrato Mary Pau"
     */

    var cliente = {
        Nombre: "",
        Correo: "",
        TemplateId: "",
        Subject: ""
    };

    //contacto ingresado en el formulario
    var contacto = {
        Nombre: req.body.nombre,
        Apellido: req.body.apellido,
        Celular: req.body.celular,
        Correo: req.body.correo,
        Mensaje: req.body.mensaje
    };

    //cuerpo de reques a la api

    var datos = {
        contacto: contacto,
        cliente: cliente
    };

  

        //configuracion de petecion post para envio de email
        const options = {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
    

    //direccion api 

    //EXAMPLE uri = url +'/api/producto/getAll';

    var uri = url +'';

    //solicitud al servidor api
            fetch(uri,options)
            .then((res)=>{
                if(res.ok){
                   
                }

            }).catch((err)=>{
                
            });
            
});



module.exports = router;
