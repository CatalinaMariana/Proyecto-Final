var express = require('express');
var router = express.Router();
var Pelicula = require('../models/Film');

router.get('/', function(req, res, next) {
  res.render('nueva_pelicula', { title: 'Nueva película' });
});

router.post('/', (req, res, next) => {
 var pelicula = Pelicula({
   name:  req.body.name,
   year: req.body.year,
   gender: req.body.gender,
   director: req.body.director,
   producer: req.body.producer,
   url: req.body.url
 });
 pelicula.save( (error,data) => {
   if (error) res.send('Se ha producido un error al guardar los datos.');
   else res.render('editar_pelicula', {data: data, nueva_pelicula: true});
 });
});

router.post('/:peliculaId', (req, res, next) => {
  res.status(404).json({mensaje:"Esta operación no está permitida"});
});

router.delete('/', (req, res, next) => {
  res.status(405).json({mensaje:"Esta accion no está permitida"});
});

router.delete('/:peliculaId', (req, res, next)=>{
  Pelicula.findOneAndDelete({_id:req.params.peliculaId}, (error, data)=>{
    if(error) res.status(404).json(error);
    else res.status(200).json(data);
  });
});


module.exports = router;
