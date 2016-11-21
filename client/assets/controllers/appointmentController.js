
"user strict"
app.controller('appointmentController', ['$scope','usersFactory', '$routeParams', '$location',function($scope, usersFactory, rParams, $location) {	


usersFactory.getApps(function(apps){
		console.log(apps,"at controller");
		$scope.apps = apps;
});
	
		
	$scope.create = function(){
		
		usersFactory.create($scope.nApp, function(res){
			console.log(res);
			if(res.errors)
				{$scope.errors = res.errors;
				console.log($scope.errors,"@controller");}
			else {
		
			$location.url('/appointment');
			}
		});
	};
}]);
	
