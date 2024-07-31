//Inicia el módulo express con el fin de dar inicio al servidor

//Importa express
const express = require('express'); 
const app = express();
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');


// Se crean las rutas
app.get('/', (req, res) => {
    res.send('Prueba 1 respuesta del servidor exitosa') //Ruta por defecto
});

// mongodb+srv://jezortiz26:pandora26@senanube.dftcqe3.mongodb.net/

//Se configura en qué puerto va a escuchar el servidor las peticiones
app.listen(10000);