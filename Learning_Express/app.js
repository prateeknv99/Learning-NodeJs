var express = require('express');
var bodyParser =  require('body-parser');
var path = require('path');

var app = express();

/*
var logger = function(req, res, next){
  console.log('Logging...');
  next();
}

app.use(logger);
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'client')))

/*
var people = [
  {
    name:'Prateek',
    age: 18
  },
  {
    name: 'Palak',
    age: 18
  }
]
*/

app.get('/', function(req, res) {
  res.send('Hello World!');
  // res.json(people); //For Priting people json
});

app.listen(3000, function() {
  console.log('Server started on port 3000...');
})
