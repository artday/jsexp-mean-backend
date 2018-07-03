var mongoose = require('mongoose');

var filmMarkSchema = mongoose.Schema({
    _id: Number,
    favorite: Boolean
});

var filmMarkModel = mongoose.model('FilmFavorite', filmMarkSchema);

module.exports = filmMarkModel;