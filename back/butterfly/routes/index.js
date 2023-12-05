var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*Caligo Memnon*/

router.get('/caligo_memnon', function(req, res, next) {
  res.send("<h1>Caligo Memnon</h1>")
  });
  
/*Cethosia Cyane*/

router.get('/cethosia_cyane', function(req, res, next) {
  res.send("<h1>Cethosia Cyane</h1>")
  });
  
/*Doleschallia Bisaltide*/

router.get('/doleschallia_bisaltide', function(req, res, next) {
  res.send("<h1>Doleschallia Bisaltide</h1>")
  }); 
  
  
/*Greta Oto*/

router.get('/greta_oto', function(req, res, next) {
  res.send("<h1>Greta Oto</h1>")
  });   
  
/*Papilio Memnon*/

router.get('/papilio_memnon', function(req, res, next) {
  res.send("<h1>Papilio Memnon</h1>")
  });   
  

/*Vindula Dejone*/

router.get('/vindula_dejone', function(req, res, next) {
  res.send("<h1>Vindula Dejone</h1>")
  });   


  
  module.exports = router;