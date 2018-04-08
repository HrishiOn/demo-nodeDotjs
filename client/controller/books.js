var myApp = angular.module('myApp');

myApp.controller('BooksController',['$scope', '$http', '$location', '$routeParams',
function($scope, $http, $location, $routeParams){
    console.log('BooksController loaded...-');
    $http({
        method:'GET',
        url:'api/books'
    }).then(function(success){
        $scope.books=success;
        console.log($scope);
    }), function(error){
        console.error(error);
    }}
]);