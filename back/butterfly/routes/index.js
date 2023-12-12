var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Butterfly' });
});


/*Caligo Memnon*/

router.get('/caligo_memnon', function(req, res, next) {
  res.render('butterfly', {
    title: "Caligo Memnon",
    picture: "images/cm1.png",
    desc: "This butterfly species lives in the Amazon rainforest and feeds on fruit rot.",
    picture2: "images/cm2.png",
    picture3: "images/cm3.png",
    picture4: "images/cm.png"
    
  });
    });
    
  
/*Cethosia Cyane*/

router.get('/cethosia_cyane', function(req, res, next) {
  res.render('butterfly', {
    title: "Cethosia Cyane",
    picture: "images/cc1.png",
    desc: "This butterfly species, whose males are orange and females are grey and white, lives in India and China.",
    picture2: "images/cc2.png",
    picture3: "images/cc3.png",
    picture4: "images/cc4.png"
    });
    });
  
/*Doleschallia Bisaltide*/

router.get('/doleschallia_bisaltide', function(req, res, next) {
  res.render('butterfly', {
    title: "Doleschallia Bisaltide",
    picture: "images/db1.png",
    desc: "This butterfly species lives in the sun-facing parts of forests and has a wing length of up to 40 millimetres.",
    picture2: "images/db2.png",
    picture3: "images/db3.png",
    picture4: "images/db4.png"
    });
    });
  
  
/*Greta Oto*/

router.get('/greta_oto', function(req, res, next) {
    res.render('butterfly', {
    title: "Greta Oto",
    picture: "images/go1.png",
    desc: " Gre Oto butterflies with transparent wings live in countries such as Ecuador, Panama and Venezuela.",
    picture2: "images/go2.png",
    picture3: "images/go3.png",
    picture4: "images/go4.png"
    });
    });

  
/*Papilio Memnon*/

router.get('/papilio_memnon', function(req, res, next) {
    res.render('butterfly', {
    title: "Papilio Memnon",
    picture: "images/pm1.png",
    desc: " With a wing length of up to 150 millimetres, this butterfly species lives mainly in South Asia.",
    picture2: "images/pm2.png",
    picture3: "images/pm3.png",
    picture4: "images/pm4.png"
    });
    });
  

/*Vindula Dejone*/

router.get('/vindula_dejone', function(req, res, next) {  
    res.render('butterfly', {
    title: "Vindula Dejone",
    picture: "images/vd1.png",
    desc: "This butterfly species, which generally lives in South East Asia, is a genus that can scare its enemies in nature with its eye-like patterns on both wings. The wing lengths of Vindula Dejone butterflies can reach up to 38 millimetres in males and 44 millimetres in females.",
    picture2: "images/vd2.png",
    picture3: "images/vd3.png",
    picture4: "images/vd4.png"
    });
    });

  
  module.exports = router;