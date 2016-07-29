(function(){
	angular
		.module('usersData')
		.directive('userList',['$compile',userList]);

		function userList($compile){
			return {
				restrict: 'E',
				scope: {
					data: '=list'
				},
				link: function(scope,element,attrs){
			
					scope.Remove = Remove;
					scope.changeMod = changeMod;

					function Remove(index){
						scope.data.splice(index,1);
					};

					function changeMod(index){

						var trelem = angular.element(element.find('tr')[index+1])
						trelem.addClass('user-change');
						console.log(trelem.contents());
						$compile(trelem)(scope);
						
					}

				},
				templateUrl: './templates/userListTemplate.html',
				transclude: false
			}
		};
})();