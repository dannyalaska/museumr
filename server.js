var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    fs = require('fs'),
    app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

// uncomment if/when public folder files created
// app.use(express.static('./public'))

app.listen(3000, function(req, res){
  console.log("listening on 3000");
});

//delete if/when public files created
app.get('/', function(req, res){
  res.send("connected");
});

mongoose.connect('mongodb://localhost/wdiApp', function(err){
  if(err){
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});


// Controller route - comment out until controllers are created
// fs.readdirSync('./controllers/').forEach(function(file){
//   if(file.substr(-3) == '.js') {
//     route = require('./controllers/' + file);
//     route.controller(app);
//   }
// });
