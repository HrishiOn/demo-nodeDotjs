var mongoose = require('mongoose');

//create schema for books
var BooksSchema = mongoose.Schema({
    title:{
        type:String
    },
    genre:{
        type:String
    },
    author:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    view_url:{
        type:String
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Books = module.exports = mongoose.model('Books', BooksSchema);

//get all books
module.exports.getBooks = function(callback, limit){
    Books.find(callback).limit(limit);
}
//get book by id
module.exports.getBookById = function(id, callback){
    Books.findById(id,callback);
}

//add a BOOK
module.exports.addBook = function(book, callback){
    Books.create(book, callback);  
}

//update a book 
module.exports.updateBook = function(id, book, options, callback){
    var query = {_id: id};
    var update = {
        title: book.title,
        genre: book.genre,
        author: book.author,
        description: book.description,
        price: book.price,
        view_url: book.view_url
    }
    Books.findOneAndUpdate(query, update, options, callback);
}

//delete a book
module.exports.deleteBook = function(id, callback){
    var query = {_id: id};
    Books.remove(query, callback);
}