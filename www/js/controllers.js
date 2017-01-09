angular.module('shopping')

.controller('ShoppingCtrl', function($scope, $http) {
var url = 'https://shopping-c7305.firebaseio.com/items.json';

$scope.items = getItems();

$scope.addItems = function () {
    var name = prompt("Que devez vous acheter ?");
    if(name) {
        var postData = {
            "name": name
        };
        $http.post(url, postData).success(function(data) {
            $scope.items = getItems();
        });
    }
};

function getItems() {
    var items = [];
    $http.get(url).success(function (data) {
        angular.forEach(data, function (value, key) {
            var name = {name: value.name};
            items.push(name);
        });
    });
    return items;
}
});
