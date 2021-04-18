/*
This file is for displaying my answers of FreecCodeCamp basic node course
Not for funning a server.
*/


/*----------------------part2------------------------------*/
/*1 console.log("Hello World"); */

/*2
app.get("/",function(req,res){
  res.send("Hello Express");
});
*/

/*3.serve html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
*/

/*4
app.use("/public", express.static(__dirname + "/public"));
*/

/*5
app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});
*/

/*6
app.get("/json", (req, res) => {
     if(process.env.MESSAGE_STYLE === "uppercase"){
       res.json({"message" : "HELLO JSON"});
     }
     res.json({"message" : "Hello json"});
   });

*/
/*7
app.use((req, res, next) => {
console.log(req.method + " " + req.path + " - " + req.ip)
next();
})
*/
/*8
app.get('/now', function(req,res, next){
    next();
  }, function(req, res){
    var time = new Date().toString();
    console.log('time'+time);
    res.json({'time': time});
  }
);
*/
/*9
app.get('/:word/echo', function(req, res){
res.json({echo: req.params.word})
console.log(req.params.word)
})
*/
/* 10.query params
app.route('/name').get(function(req,res) {
  const firstname = req.query.first;
  const lastname =req.query.last;
  res.send({"name":firstname + " " +  lastname})
}).post();
*/
/* 11.
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
*/
/*12
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/name', urlencodedParser, (req, res) => {
  let name = req.body.first + ' ' + req.body.last;
  res.json({name: name});
});
*/