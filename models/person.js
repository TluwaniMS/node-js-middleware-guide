const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    last_name:String
});

const Person = mongoose.model('Person',personSchema);

module.exports = Person;