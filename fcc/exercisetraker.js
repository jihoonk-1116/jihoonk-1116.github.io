const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const shortId = require('shortid')
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const camp_userSchema = new mongoose.Schema({
  shortId : {
    type:String,
    unique:true, 
    default: shortId.generate
  },
  username: {
    type: String,
    required: true
  },
  exercise:{
    desc:String,
    duration:Number,
    date:Date
  }
});
const campUser = mongoose.model('campUser', camp_userSchema)


app.get('/api/users', (req, res) => {
  campUser.find({}, (error, data) => {
    if(!error){
      console.log(data);
      res.json(data)
    }
  })
})

app.post('/api/users', async(req,res)=>{
  const username = req.body.username;
  const usercheck = await campUser.findOne({username}).lean();
  if(usercheck){
    return res.send({'error':'username is already in use'})
  }
  const exercise ={}
  var saveduser;
  try{
    saveduser = await campUser.create({
      username
    })
  }
  catch(err){
    throw err
  }
  res.json({
    "username":saveduser.username,
    "_id":saveduser.shortId});
})

app.post( "/api/users/:_id/exercises", (req, res, next) => {
    const params = req.body;
    if (params.date === "") {
      req.body.date = new Date();
    }
    next();
  },
  async function(req, res) {
    console.log(req.body.date + "----")
    var {userId, description, duration, date} = req.body
    if(typeof req.body.date === 'undefined'){
      date = new Date();
    }
    const exercise = {
      'description': description,
      'duration': duration,
      'date': new Date(date).toDateString()
    };
    var update_ex;
    try{
      update_ex = await campUser.findOneAndUpdate(req.body.userId,{'exercise':exercise})
    }catch(err){
      console.log(err);
    }
    const check_update = await campUser.findOne(req.body.userId)
    let resjson = {
      'username': check_update.username,
      'description':description,
      'duration':60,
      '_id':check_update._id.toString(),
      'date' :new Date(date).toDateString()
      }
    console.log(resjson);
    res.json(  Object.assign(
      {
      'username': check_update.username,
      'description':description,
      'duration':60,
      '_id':check_update._id.toString(),
      'date' :new Date(date).toDateString()
      }
    ))
  }
);

app.get("/api/users/:_id/logs", function(req, res) {
  var promise = campUser.findOne(req.body.userId);
  promise
    .then(function(data) {
      return res.json(
        controller.formatOutput(
          data,
          req.query.limit,
          req.query.to,
          req.query.from
        )
      );
    })
    .catch(function(reason) {
      return res.json(reason);
    });
});


mongoose.connect("mongodb+srv://<password>@firstdb.irfsc.mongodb.net/firstDB?retryWrites=true&w=majority",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    },
    (err)=>{console.log("DB connected",err)});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
