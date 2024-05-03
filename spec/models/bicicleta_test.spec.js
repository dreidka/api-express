var Bicicleta = require('../../model/bicicleta.model')

beforeEach(() => {
  Bicicleta.allBicis.length = [];
})

describe('Bicicleta.allBicis', () => {
  it('comienza vacia', () => {
    expect(Bicicleta.allBicis.length).toBe(0);
  })
})

describe('Bicicleta.add', () => {
  it('Agregar bicicleta', () => {
    expect(Bicicleta.allBicis.length).toBe(0);

    var b1 = new Bicicleta(1,	'Rojo', 'Urbano',	[4.607466,-74.216151]);
    Bicicleta.add(b1);

    expect(Bicicleta.allBicis.length).toBe(1);
    expect(Bicicleta.allBicis[0]).toBe(b1);
  })
})

describe('Bicicleta FindBy', () =>{
  it('Debe devolver el id 1', () => {
    expect(Bicicleta.allBicis.length).toBe(0);

    var b1 = new Bicicleta(1,	'Rojo', 'Urbano',	[4.607466,-74.216151]);
    var b2 = new Bicicleta(2,	'Azul', 'montaña',	[4.606443,-74.218524]);
    Bicicleta.add(b1);
    Bicicleta.add(b2);

    targetBici = Bicicleta.findById(1);
    expect(targetBici.id).toBe(1);
    expect(targetBici.color).toBe(b1.color);
    expect(targetBici.modelo).toBe(b1.modelo);
  })
})