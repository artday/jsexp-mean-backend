var mongoose = require('mongoose');

var filmFavoriteSchema = mongoose.Schema({
    _id: Number,
    favorite: Boolean
});

var filmFavoriteModel = mongoose.model('FilmFavorite', filmFavoriteSchema);

module.exports = filmFavoriteModel;