angular.module('about',[])

.controller('AboutController', ['$scope','AboutService',function($scope, AboutService){
	var aboutDetails;

	$scope.title = "About page!";

	AboutService.getAllAboutDetails().then(function(response){
		$scope.aboutDetails = response;
		aboutDetails = response;
	});
}])

.controller('AboutDetailController', ['$scope', '$stateParams','AboutService',function($scope,$stateParams,AboutService){
	AboutService.getAllAboutDetails().then(function(response){
		response.filter(function(detail){
			if(detail.id == $stateParams.detailId){
				$scope.currentDetail = detail;
			}
		});
	});
}])

.service('AboutService', ['$http', function($http){
	return {
		getAllAboutDetails : function(){
			return $http.get('mockdata/aboutdetails.json').then(function(response){
				return response.data;
			});
		}
	};
}])