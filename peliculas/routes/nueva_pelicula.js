var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nueva_pelicula', { title: 'Nueva película' });
});


//POST
router.post('/cargar_pelicula', function(req, res, next) => {
 var pelicula = Pelicula({
   name: req.body.name,
   year: req.body.year,
   gender:req.body.gender,
   director:req.body.director
   producer:req.body.producer,
   url:req.body.url

 });
 pelicula.save( (error,data) => {
   if (error) res.status(404).json({mensaje:'No se guardo correctamente'})
   else res.status(201).json(data);
 });
  //
});

router.post('/cargar_pelicula', (req, res, next) => {
  res.status(404).json({mensaje:"Esta operación no está permitida"});
});

router.delete('/cargar_pelicula', (req, res, next) => {
  res.status(405).json({mensaje:"Esta accion no está permitida"});
});

router.delete('/cargar_pelicula', (req, res, next)=>{
  Pelicula.findOneAndDelete({'_id':req.params.cargar_pelicula}, (error, data)=>{
    if(error) res.status(404).json(error);
    else res.status(200).json(data);
    });
  });


module.exports = router;
