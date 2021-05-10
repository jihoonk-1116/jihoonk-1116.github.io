/*
1. Install and Set Up Mongoose
*/
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://JihoonDB:<password>@firstdb.irfsc.mongodb.net/firstDB?retryWrites=true&w=majority");
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
/*
3. Create and Save a Record of a ModelPassed
*/
var Person = mongoose.model('Person',personSchema);

const createAndSavePerson = function(done) {
  const person = new Person({name: 'Joe', age: 21, favoriteFoods: ['pizza', 'burger']});
  person.save((err, data) => {
    if (err) {
      done(err);
    }
    done(null, data);
  });
};
/*
4.
Create Many Records with model.create()Passed
*/
var createManyPeople = function(arrayOfPeople, done) {
    Person.create(arrayOfPeople, function (err, data) {
      if (err) {
        done(err);
      }
    done(null, data);
    });
};
/*
5
*/
var findPeopleByName = function(personName, done) {
    Person.find({name:personName}, function (err, data) {
    if(err){
      return done(err);
    }
    return done(null, data);
    })
};
/*
6
*/
var findOneByFood = function(food, done) {
  Person.findOne({favoriteFoods: food}, function(err, data) {
    console.log(data);
    if(err) return done(err);
    return done(null, data)
  })
  
};
/*
7
*/

var findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => err ? done(err) : done(null, data)); 
};
