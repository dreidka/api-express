const request = require('request')
var Bicicleta = require('../../model/bicicleta.model')
var server = require('../../bin/www')

describe('Bicicleta API', () => {
  describe('GET BICICLETAS/',()=>{
    it('Status 200', ()=>{
      expect(Bicicleta.allBicis.length).toBe(0);

      var a = new Bicicleta(1,'negra','urbana',[45.45643,48.5645])
      Bicicleta.add(a);
      

      request.get('http://localhost/3000/api/bicicletas', function(error,response,body){
        expect(response.statusCode).toBe(200);
      })
    })
  })
  //COMPLETAR?

  describe('POST BICICLETAS /create',() =>{
    it('STATUS 200', (done) => {
      var headers = {'content-type':'application/json'};
      var aBici = '{"id":10,"color":"rojo","modelo":"urbana","lat":-34,"lng":-54}';
      request.post({
        headers: headers,
        url: 'http://localhost:5000/api/bicicletas/create',
        body: aBici
      }, function(error,response,body){
          expect(response.statusCode).toBe(200);
          expect(Bicicleta.findByiId(10).color).toBe("rojo");
          done();
      })
    })
  })

})