/*
1. Install and Set Up Mongoose
*/
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://JihoonDB:6581139a@firstdb.irfsc.mongodb.net/firstDB?retryWrites=true&w=majority");
/*
2. Make Person Schema
*/
const Schema = mongoose.Schema;

var personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods:[String]
  });

var Person = mongoose.model('Person',personSchema);
