var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', function($http){
    console.log('angular js :)');

    var vm = this;

    vm.emersonLikes = 0;
    vm.emersonLoves = 0;
    vm.friendsLikes = 0;
    vm.friendsLoves = 0;
    vm.wallstreetLikes = 0;
    vm.wallstreetLoves = 0;
    vm.runnerLikes = 0;
    vm.runnerLoves = 0;
    vm.beerLikes = 0;
    vm.beerLoves = 0;
    vm.protesterLikes = 0;
    vm.protesterLoves = 0;

    vm.emersonLike = function(){
        vm.emersonLikes += 1;
        vm.emersonDisplay = 'Likes: ' + vm.emersonLikes + ', ' + 'loves: ' + vm.emersonLoves; 
    }

    vm.emersonLove = function(){
        vm.emersonLoves += 1;
        vm.emersonDisplay = 'Likes: ' + vm.emersonLikes + ', ' + 'loves: ' + vm.emersonLoves; 
    }

    vm.protesterLike = function(){
        vm.protesterLikes += 1;
        vm.protesterDisplay = 'Likes: ' + vm.protesterLikes + ', ' + 'loves: ' + vm.protesterLoves; 
    }

    vm.protesterLove = function(){
        vm.protesterLoves += 1;
        vm.protesterDisplay = 'Likes: ' + vm.protesterLikes + ', ' + 'loves: ' + vm.protesterLoves; 
    }

    vm.wallstreetLike = function(){
        vm.wallstreetLikes += 1;
        vm.wallstreetDisplay = 'Likes: ' + vm.wallstreetLikes + ', ' + 'loves: ' + vm.wallstreetLoves; 
    }

    vm.wallstreetLove = function(){
        vm.wallstreetLoves += 1;
        vm.wallstreetDisplay = 'Likes: ' + vm.wallstreetLikes + ', ' + 'loves: ' + vm.wallstreetLoves; 
    }

    vm.friendsLike = function(){
        vm.friendsLikes += 1;
        vm.friendsDisplay = 'Likes: ' + vm.friendsLikes + ', ' + 'loves: ' + vm.friendsLoves; 
    }

    vm.friendsLove = function(){
        vm.friendsLoves += 1;
        vm.friendsDisplay = 'Likes: ' + vm.friendsLikes + ', ' + 'loves: ' + vm.friendsLoves; 
    }

    vm.beerLike = function(){
        vm.beerLikes += 1;
        vm.beerDisplay = 'Likes: ' + vm.beerLikes + ', ' + 'loves: ' + vm.beerLoves; 
    }

    vm.beerLove = function(){
        vm.beerLoves += 1;
        vm.beerDisplay = 'Likes: ' + vm.beerLikes + ', ' + 'loves: ' + vm.beerLoves; 
    }

    vm.runnerLike = function(){
        vm.runnerLikes += 1;
        vm.runnerDisplay = 'Likes: ' + vm.runnerLikes + ', ' + 'loves: ' + vm.runnerLoves; 
    }

    vm.runnerLove = function(){
        vm.runnerLoves += 1;
        vm.runnerDisplay = 'Likes: ' + vm.runnerLikes + ', ' + 'loves: ' + vm.runnerLoves; 
    }

})