var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

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

app.post('/movies/createMovieModal', function(req, res, next){

  var movie = moviesData[req.params.movie];

  if(movie){
    if(req.body && req.body.picture && req.body.name && req.body.description){

      var data ={
        picture: req.body.picture,
        name: req.body.name,
        discription: req.body.description
      };

      movie.movies = movie.movies || [];
      movie.movies.push(data);

      fs.writeFile('movieData.json', JSON.stringify(moviesData), function (err)){
        if (err) {
           res.status(500).send("Unable to save movie to \"database\".");
         } else {
           res.status(200).send();
         }
       });
     } else {
  res.status(400).send("Movie information must have a URL.");
}

} else {
next();
}
});

app.use(express.static('public'));
/**
 * app.get('*', function (req, res) {
 *   res.status(404).render('404Page');
 *   });
 *   **/
app.listen(port, function () {
  console.log("== Server listening on port", port);
});

