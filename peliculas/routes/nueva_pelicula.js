var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nueva_pelicula', { title: 'Nueva película' });
});


//POST
router.post('/',function(req, res, next) => {
 var pelicula = Pelicula({
   id:  req.body.id,
   name:  req.body.name,
   age: req.body.ag,
   director: req.body.director,
   gender: req.body.genero
 });
 pelicula.save(error,data) => {
   if (error) res.status(404).json({mensaje:'No se guardo correctamente'})
   else res.status(201).json(data);
 });
  //
});
router.post('/:peliculaId'(req, res, next)=> {
  res.status(404).json({mensaje:"Esta operación no está permitida"});
  });

router.delete('/',(req, res, next)=>{
  res.status(405).json({mensaje:"Esta accion no está permitida"});
  });

  router.delete('/:peliculaId', (req, res, next)=>{
    Pelicula.findOneAndDelete({_id:req.params.peliculaId}, (error, data)=>{
      if(error) res.status(404).json(error);
      else res.status(200).json(data);
      });
    });


module.exports = router;
