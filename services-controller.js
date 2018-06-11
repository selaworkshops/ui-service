angular.module('services', [])
.controller('operations', function($scope, $http) {
	
	$http.get('http://localhost:3001/sum/11/15')
		.then(function(response) {
            $scope.sum = response.data;
        });
	
    $http.get('http://localhost:3002/substraction/11/15')
		.then(function(response) {
            $scope.substraction = response.data;
        });
		
	$http.get('http://localhost:3003/multiplication/11/15')
		.then(function(response) {
            $scope.multiplication = response.data;
        });
		
	$http.get('http://localhost:3004/division/11/15')
		.then(function(response) {
            $scope.division = response.data;
        });
})
