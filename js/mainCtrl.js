var app = angular.module('friendsList')


app.controller('mainCtrl', function($scope) {

$scope.myFriends = ['Lil Johnny', 'Bacon', 'Double Bacon', 'Regina Spektor', 'Dolphins'];

$scope.runStuff = function() {
	$scope.myFriends.push($scope.newFriend);
	$scope.newFriend = '';
};






});

