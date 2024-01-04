var express = require('express');
var router = express.Router();

var Butterfly = require("../models/butterfly").Butterfly


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с butterflies');
});

    
/* Страница героев */
router.get('/:nick', function(req, res, next) {
  Butterfly.findOne({nick:req.params.nick}, function(err,butterfly){
  if(err) return next(err)
  if(!butterfly) return next(new Error("Нет такого котенка в этом мультике"))
  res.render('butterfly', {
  title: butterfly.title,
  picture: butterfly.avatar,
  desc: butterfly.desc
  })
  })
  })
  


module.exports = router;
