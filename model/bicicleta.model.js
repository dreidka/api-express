var Bicicleta = function (id, color, modelo, ubicacion) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function () {
  return 'id: ' + this.id + ' color: ' + this.color;
}

Bicicleta.allBicis = [];

Bicicleta.add = function(aBici){
  Bicicleta.allBicis.push(aBici)
}

Bicicleta.findById = function (aBiciId) {
  var aBici = Bicicleta.allBicis.find(x => x.id === aBiciId);

  if(aBici){
    return aBici;
  }else{
    throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
  }
}

Bicicleta.removeById = function (aBiciId) {
  for (let i = 0; i < Bicicleta.allBicis.length; i++) {
    if (Bicicleta.allBicis[i].id == aBiciId) {
      Bicicleta.allBicis.splice(i, 1);
      break;
    }
  }
}

// var b1 = new Bicicleta(1,	'Rojo', 'Urbano',	[4.607466,-74.216151]);
// var b2 = new Bicicleta(2,	'Azul', 'Urbano',	[4.606443,-74.218524]);
// var b3 = new Bicicleta(3,	'Blanco',	'Urbano',	[4.609319,-74.220006]);

// Bicicleta.add(b1);
// Bicicleta.add(b2);
// Bicicleta.add(b3);

module.exports = Bicicleta;