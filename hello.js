angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('https://newsapi.org/v1/articles?source=die-zeit&sortBy=latest&apiKey=ce4929954e754d94bfe52373ec9086d4').
        then(function(response) {
            $scope.articles = response.data.articles;
        });
});
