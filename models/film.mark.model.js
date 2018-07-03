var mongoose = require('mongoose');

var filmMarkSchema = mongoose.Schema({
    _id: Number,
    mark: Boolean
});

var filmMarkModel = mongoose.model('FilmMark', filmMarkSchema);

module.exports = filmMarkModel;