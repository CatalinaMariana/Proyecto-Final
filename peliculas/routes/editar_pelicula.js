var express = require('express');
var router = express.Router();
var request = require('request');
var Pelicula = require('../models/Film');


/* GET home page. */
router.get('/:id_pelicula', function(req, res, next) {
  var url = req.protocol + '://' + req.get('host') + '/peliculas/' + req.params.id_pelicula;
  request(url, (error, response, body) => {
    console.log(body);
    res.render('editar_pelicula', {title: 'Editar película', data: JSON.parse(body) });
  });
});

router.post('/', (req, res, next) => {
  var nombre = req.body.nombre;
  var url = req.body.imagen;
  var poder = req.body.poder;
  var miComic = Comic(
      {
        nombre: nombre,
        imagen: url,
        poderes: poder
      }
  );
  miComic.save((err, data) => {
    if (err) res.send('Error al guardar los datos');
    else res.render('index', data);
  });
});

module.exports = router;
