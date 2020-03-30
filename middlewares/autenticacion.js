var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;

// ==========================================
// Middleware
// Verificar token - ver si es valido -se recibe por url
// ==========================================
exports.verificaToken = function(req, resp, next) {

    var token = req.query.token;

    jwt.verify(token, SEED, (err, decoded) => {

        if (err) {
            // 401 UNATHORIZED
            return resp.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: err
            });
        }

        // extraigo el obj usuario de decoded y lo pongo en el req que llama usuario.js
        req.usuario = decoded.usuario;

        //gracias a esto se sigue ejecutando, si no se queda como leyendo
        next();

        /* return resp.status(200).json({
            ok: true,
            decoded: decoded
        }); */

    });
};