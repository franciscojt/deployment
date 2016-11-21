"use strict"
console.log('Users Factory');
app.factory('usersFactory', ['$http', function($http) {
  // constructor for our factory
  var	apps	= [],
		appointment		= {},
	  	app				= {},
	  	user 			= {};
	
  function usersFactory(){
    var _this = this;
	  
  	app.name =  user.name
    this.create = function(app,callback){
		app.name=user.name
		console.log(app, "creating at factory");
      $http.post('/appointment', app).then(function(returned_data){
		  
        console.log(returned_data.data.errors, "@ facory");
        if (typeof(callback) == 'function'){
			if(returned_data.data.errors){
				console.log(returned_data.data.errors, '@err at factory')
				
				callback(returned_data.data);
			} else{
			
			apps.push(returned_data.data)
			
			appointment = returned_data.data;
          callback(returned_data.data);}
        }
      });
    };
	  
  
	  
	  
	this.login = function(userl, callback){
		$http.get('/appointments').then(function(appointments){
			console.log(appointments, "before assigment")
			apps = appointments.data
			console.log(appointments)
			user = userl;
			console.log(user);
			callback(user);
		});
		
		}
		
	
	  
	this.logoff = function(){
		user={}
		return user;
	}  
	  
	  
   

   
    this.delete = function(id, callback){
		console.log('fried factory del')
		$http.delete('/appointments/'+id).then(function(returned_data){
			callback(user);
			
		});
    };
    
		
 

    this.getApps = function(callback){
		
		$http.get('/appointments').then(function(appointments){
		console.log('Factory get apps', apps);
			apps = appointments.data;
    	callback(apps);
			})
    };
    this.getUser = function(callback){
        callback(user);
    };
  }
  console.log(new usersFactory());
  return new usersFactory();
}]);