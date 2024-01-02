const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

var schema = mongoose.Schema({ name: String })
schema.methods.butterfly = function(){
    console.log(this.get("name") + " - это бабочки")
    };
    

const Butterfly = mongoose.model('Butterfly', schema);

const butterflies = new Butterfly({ name: 'Butterflies' });
butterflies.save().then(() => butterflies.butterfly());
