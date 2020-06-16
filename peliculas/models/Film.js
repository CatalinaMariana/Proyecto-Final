var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FilmSchema = new Schema({
    id:Number,
    name: String,
    year: Number,
    gender: String,
    director: {type: Schema.Types.ObjectId,ref: "Director"},
    producer: {type: Schema.Types.ObjectId,ref: "Producer"},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Film', FilmSchema);
