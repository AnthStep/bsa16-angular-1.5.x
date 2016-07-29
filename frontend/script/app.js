(function(){
	var module = angular
		.module('usersData',[])
		.controller('init',['$scope',function($scope){
			$scope.usersArray = [
				{
					firstName: 'John',
					secondName: 'Snow/Targarien',
					email: 'livedead@gmail.com'
				},
				{
					firstName: 'Gregor',
					secondName: 'Clegane',
					email: 'gigant@gmail.com'
				},
				{
					firstName: 'Arya',
					secondName: 'Stark',
					email: 'killer@gmail.com'
				},
				{
					firstName: 'Tyrion',
					secondName: 'Lannister',
					email: 'tiny@gmail.com'
				},
				{
					firstName: 'Sansa',
					secondName: 'Stark',
					email: 'lady@gmail.com'
				},
				{
					firstName: 'Ramsay',
					secondName: 'Bolton',
					email: 'notbastard@gmail.com'
				},
				];
		}]);

})();