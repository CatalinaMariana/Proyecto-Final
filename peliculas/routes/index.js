var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  var url = req.protocol + '://' + req.get('host') + '/peliculas';
  request(url, (error, response, body) => {
    res.render('index', {title: 'Catálogo de películas', data: JSON.parse(body) });
  });
});

module.exports = router;
