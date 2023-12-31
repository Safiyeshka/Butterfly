const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Butterfly = mongoose.model('Butterfly', { name: String });

const Butterflies = new Butterfly({ name: 'butterfly_name' });
Butterflies.save().then(() => console.log('butterfly'));