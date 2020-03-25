// Requires --> importacion de librerias par que ande algo
var express = require('express');

// establecer conexion, aca hago referencia a la libreria
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// uso la libreria - CONEXION A LA BD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, resp) => {
    // si la bd no funcionaba aca se para todo
    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

// Rutas
app.get('/', (request, response, next) => {

    response.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });

});

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server corriendo en el port: 3000: \x1b[32m%s\x1b[0m', 'online');
});