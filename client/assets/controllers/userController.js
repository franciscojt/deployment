"user strict"
app.controller('userController', ['$scope','usersFactory', '$routeParams', '$location',function($scope, usersFactory, rParams, $location) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/

	var apps =[];
	var user ={}
	//keeps the user logged in
	

	
	function appointments(){
		usersFactory.getApps(function(apps){
			console.log(apps,"at controller");
			$scope.apps = apps;
		});
	}
	
	usersFactory.getUser(function(user){
	if(!user)
		{$location.url('/')}
	else{
	$scope.user=user;
	appointments()	
	console.log(user, "@controller")}
});
	
	//logs in the user
	$scope.login = function(){
		usersFactory.login($scope.user, function(res){
			if(!$scope.user.name){
				$scope.errors = "Please enter your full name";
				$location.url('/');
		}else {			
			$scope.userl={};
			
			$location.url('/appointment');}
		})};
	

	$scope.del = function(id){
		console.log(id, 'userController');
		usersFactory.delete(id, function(res){
			console.log('Appointment deleted succesfully')
			$scope.user = {};
			$location.url('/')
		});
		
	};
	
	$scope.update = function(id){
		usersFactory.update($scope.user, id, function(res){
			console.log(res, "response at update factory");
			$scope.user={};
			$location.url('/show');
		});
	};

	$scope.logoff = function(){
		var log = confirm("Are you sure You want to Log off?")
		if(log){
		usersFactory.logoff();
			
			$scope.user = {};
			
			$location.url('/');}
		else{$location.url('/appointment')}
		
		};
	
 
	
	
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the friends when we get back?  We can re-run index.
*/
}]); 