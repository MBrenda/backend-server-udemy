// Requires --> importacion de librerias par que ande algo
var express = require('express');
// establecer conexion, aca hago referencia a la libreria
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// Body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// uso la libreria - CONEXION A LA BD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, resp) => {
    // si la bd no funcionaba aca se para todo
    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

// Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');

// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server corriendo en el port: 3000: \x1b[32m%s\x1b[0m', 'online');
});