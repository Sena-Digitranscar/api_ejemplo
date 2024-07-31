//Inicia el módulo express con el fin de dar inicio al servidor

//Importa express
const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Se llama al body-parser
app.use(bodyParser.json());

//Importan las rutas
const postRoute = require('./routes/post');
app.use('/servicios', postRoute);

// Se crean las rutas
app.get('/', (req, res) => {
    res.send('Prueba 1 respuesta del servidor exitosa') //Ruta por defecto
});

//Conexión a la base de datos
mongoose.connect(
    'mongodb+srv://jezortiz26:f3Zy4vcvzhIKBlol@senanube.dftcqe3.mongodb.net/?retryWrites=true&w=majority&appName=SenaNube', 
    { useNewUrlParser: true }).then(() => {
            console.log('Si hay conexión a la base de datos')
        }).catch((err) => {console.error('Error connecting', err)}); 

//Se configura en qué puerto va a escuchar el servidor las peticiones
app.listen(10000);