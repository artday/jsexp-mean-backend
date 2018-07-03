var express = require('express');
var router = express.Router();

var FilmFavoriteModel = require('./../models/film.favorite.model');
var FilmMarkModel = require('./../models/film.mark.model');

router.get('/favorites', function(req, res) {
    var query = {_id: {$in: req.query.filmIds.split(',')}};
    FilmFavoriteModel.find(query, function(err, favorites){
        if(err) { throw err; }
        res.send(favorites);
    });
}).post('/favorites', function (req, res) {
    var favorite = new FilmFavoriteModel({
        _id: req.body.filmId,
        favorite: true
    });
    favorite.save(function(err){
        if(err) { throw err; }
        res.send(favorite);
    });
}).delete('/:id/favorites', function(req, res){
    var query = { _id: req.params.id };
    FilmFavoriteModel.deleteOne(query, function(err){
        if(err) { throw err; }
        res.send({_id: req.params.id});
    });
})
.get('/marks', function(req, res) {
    var query = {_id: {$in: req.query.filmIds.split(',')}};
    FilmMarkModel.find(query, function(err, marks){
        if(err) { throw err; }
        res.send(marks);
    });
}).post('/marks', function (req, res) {
    var mark = new FilmMarkModel({
        _id: req.body.filmId,
        mark: true
    });
    mark.save(function(err){
        if(err) { throw err; }
        res.send(mark);
    });
}).delete('/:id/marks', function(req, res){
    var query = { _id: req.params.id };
    FilmMarkModel.deleteOne(query, function(err){
        if(err) { throw err; }
        res.send({_id: req.params.id});
    });
});

module.exports = router;