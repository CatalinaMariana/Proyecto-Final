var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Pelicula = require('../models/Film');

router.get('/', (req, res, next) => {
  Pelicula.find({}, (error, data) => {
    if (error) res.status(400).json({'mensaje': 'Se ha encontrado un error en api'})
    else res.status(200).json(data);
  });
});

router.get('/:id_pelicula', (req, res, next) => {
  Pelicula.findOne({'_id': req.params.id_pelicula}, (error, data) => {
    if (data == null) {
      res.status(400).json({'mensaje': 'No encontrado'});
    }else{
      res.status(200).json(data);
    }
  });
});

router.post('/:id_pelicula', (req, res, next) => {
  res.status(404).json({mensaje: 'No está permitida la acción'});
});

module.exports = router;
