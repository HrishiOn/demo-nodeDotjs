var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        controller:'BooksController',
        templateUrl:'views/books.html'
    })
    .when('/books', {
        controller:'BooksController',
        templateUrl:'views/book.html'
    })
    .when('/books/details/:id', {
        controller:'BooksController',
        templateUrl:'views/book_details.html'
    })
    .when('/books/addbook',{
        controller:'BooksController',
        templateUrl:'views/addAbook.html'
    })
    .when('books/editbook/:id', {
        controller:'BooksController',
        templateUrl:'views/aditAbook.html'
    })
    .otherwise({
        redirectTo:'/'
    });
});