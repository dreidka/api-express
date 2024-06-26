// Edwin Fandiño Salazar
// 20221978016

const Bicicleta = require ('../../model/bicicleta.model')

exports.bicicleta_list = function (req, res) {
  res.status(200).json({
    bicicletas: Bicicleta.allBicis
  })
}

exports.bicicleta_create = function (req, res) {
  var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
  bici.ubicacion = [req.body.lat, req.body.lng];

  Bicicleta.add(bici);

  res.status(200).json({
    success: true,
    message: 'Bicicleta created successfully',
    bici
  })
}

exports.bicicleta_delete = function(req, res) {
  Bicicleta.removeById(req.body.id);

  res.status(200).json({
    success: true,
    message: 'Bicicleta deleted successfully'
  })
}