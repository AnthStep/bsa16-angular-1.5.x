(function(){
		angular
		.module('usersData')
		.directive('userChange',['$compile',userChange]);

		function userChange($compile){
			return {
				restrict: 'C',
				link: function(scope,element,attrs){
					
				},
				templateUrl: './templates/userChangeTemplate.html',
				transclude: false
			}
		}
})()