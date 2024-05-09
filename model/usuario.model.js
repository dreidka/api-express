var mongoose = require('mongoose');
var Reserva = require('./reserva.model');
var schema = mongoose.Schema;


var usuarioSchema = new Schema({
    nombre: String,
})

usuarioSchema.methods.reservar = function(biciId,desde,hasta,cb){
    var reserva = new Reserva({usuario : this._id,bicicleta:biciId,desde:desde,hasta:hasta,cb:cb})
    console.log(reserva)
    reserva.save(cb)
}

module.exports = mongoose.model('Usuario',usuarioSchema);