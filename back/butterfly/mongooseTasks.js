var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1')

var Butterfly = require("./models/butterfly").Butterfly
var butterfly = new Butterfly({
  title: "Виндула",
  nick: "vindula"
})
console.log(butterfly);

butterfly.save().then(function(savedButterfly) {
    console.log(savedButterfly.title);
  })
  .catch(function(error) {
    console.error(error);
  });