// importo mongoose
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// defino un schema
var Schema = mongoose.Schema;

var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
};

var usuarioSchema = new Schema({

    // objeto de javascript
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'El correo es necesario'] },
    password: { type: String, required: [true, 'La contraseña es necesaria'] },
    img: { type: String, required: [false] },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos }

});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });

// para usar este shcema fuera de este archivo
// nombre de este esquema/modelo 'Usuario'
// objeto que quiero que relacione usuarioSchema
module.exports = mongoose.model('Usuario', usuarioSchema);