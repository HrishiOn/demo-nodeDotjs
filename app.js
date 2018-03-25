var express= require('express');
var app= express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Genre = require('./modules/genre');

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore')
var db = mongoose.connection;

//create route
app.get('/',function(req,res){
    res.send('hello world.. please use /api/books or /api/genres..');
});

//genres
app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,json){
        if(err){
            throw err;
        }
        res.json;
    });
});
//port config
app.listen(4000);
console.log('running on 4000');