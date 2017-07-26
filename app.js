var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts) {
        $scope.posts = posts.posts;
        
        $scope.test = 'Hello Angular!';
        /*
        $scope.posts = [
            { title: 'post 1', upvotes: 5 },
            { title: 'post 2', upvotes: 20 },
            { title: 'post 3', upvotes: 15 },
            { title: 'post 4', upvotes: 90 },
            { title: 'post 5', upvotes: 4 }
        ];
        */
        $scope.addPost = function() {
            if (!$scope.title || $scope.title === '') {
                return;
            }
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0
            });
            scope.title = '';
        };
        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        }
        $scope.decrementUpvotes = function(post) {
            post.upvotes -= 1;
        }
        
    }
]);

app.factory('posts', [function(){
    // service body
    var o = {
        posts: []
    }
    return o;
}]);