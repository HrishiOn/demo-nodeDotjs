var mongoose = require('mongoose');

//genre schema
var genreSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number_of_books:{
        type:Number
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Genre = module.exports = mongoose.model('genre', genreSchema);

//to get genres from db
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}