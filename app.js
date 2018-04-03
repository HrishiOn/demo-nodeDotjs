var express= require('express');
var app= express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongoose = require('mongoose');

app.use(express.static(__dirname+ '/client'));

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore',function(err){
    if(err)
    console.log('oops... connection failed');
    console.log('yaayy..connected..!!!');
});

var Genre = require('./modules/genre.js');
var Books = require('./modules/book.js');

//create route
app.get('/',function(req,res){
    res.send('hello world.. please use /api/books or /api/genres..');
});
//console.log('success');

//genres
app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,genres){
        if(err)
            throw err;
        else if(genres === null)
        console.log('empty response: genre');
        else{
            res.json(genres);
        }
    });
});

//get genre by id
app.get('/api/genre/:_id', function(req,res){
    Genre.getGenreById(req.params._id, function(err, genre){
        if (err) throw err;
        else if (genre === null) console.log('empty record');
        else res.json(genre);
    })
});

//add a genre
app.post('/api/genres', function(req,res){
    var genreBody = req.body;
    Genre.addGenre(genreBody, function(err,  genre){
        if(err) throw err;
        else if(genre === null) console.log('genre cannot be entered');
        else res.json(genre);
    })
});

//update a genre
app.put('/api/genres/:_id', function(req, res){
    var id = req.params._id;
    var genreBody = req.body;
    Genre.updateGenre(id, genreBody, {}, function(err, genre){
        if(err) throw err;
        else if(genre === null) console.log('cannot update genre');
        else res.json(genre);
    })
});

//delete a genre
app.delete('/api/genres/:_id', function(req, res){
    var id = req.params._id;
    Genre.deleteGenre(id, function(err, genre){
        if(err) throw err;
        else if (genre === null) console.log('cannot delete genre');
        else res.json(genre);
    })
});

//books
app.get('/api/books',function(req,res){
    Books.getBooks(function(err,books){
        if(err){
            throw err;
        }
        else if(books === null)
        console.log('empty response: books');
        else{
            res.json(books);
        }
    })
});

//add a book
app.post('/api/books',  function(req, res){
    var bookBody = req.body;
    Books.addBook(bookBody, function(err, book){
        if(err) throw err;
        else if (book === null) console.log('book cannot be entered');
        else res.json(book);
    })
});

//get book by id
app.get('/api/book/:_id',function(req,res){
    Books.getBookById(req.params._id, function(err,book){
        if(err){
            throw err;
        }
        else if(book === null)
        console.log('empty response: book');
        else{
            res.json(book);
        }
    })
});

//update a book
app.put('/api/books/:_id', function(req, res){
    var bookId = req.params._id;
    var bookBody = req.body;
    Books.updateBook(bookId, bookBody, {}, function(err, book){
        if (err) throw err;
        else if(book === null) console.log('cannot update book');
        else res.json(book);
    })
});

// delete a book
app.delete('/api/books/:_id', function(req, res){
    var id = req.params._id;
    Books.deleteBook(id, function(err, book){
        if(err) throw err;
        else if(book === null) console.log('cannot delete the book');
        else res.json(book);
    })
});
//port config
app.listen(4000);
console.log('running on 4000');