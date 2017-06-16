var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var moviesData = require('./movieData');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/movies', function (req, res, next) {

  var templateArgs = {
    picture: movieData.picture,
    name: movieData.name,
    discription: movieData.description
  };

  res.render('moviePage', templateArgs);

});

app.use(express.static('public'));
/**
app.get('*', function (req, res) {
  res.status(404).render('404Page');
});
**/
app.listen(port, function () {
  console.log("== Server listening on port", port);
})
