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

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//to get genres from db
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);    
}
//get genres by id
module.exports.getGenreById = function(id, callback){
    Genre.findById(id, callback);
}

//add a genre
module.exports.addGenre = function(genre, callback){
    Genre.create(genre, callback);  
}

//update a genre
module.exports.updateGenre = function(id, genre, options, callback){
    var query = {_id: id};
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}

//delete a genre
module.exports.deleteGenre = function(id, callback){
    var query = {_id: id};
    Genre.remove(query, callback);
}