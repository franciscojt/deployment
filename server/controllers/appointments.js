"use strict"
console.log('Appointment controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');


// Build out the methods in the friendsControllers below

var app = {}
function AppointmentController(){
  this.load = function(req,res){
	  Appointment.find({}, function(err, results){
		  
		  res.json(results)
		  
	  });
  };
  this.create = function(req,res){
//	  console.log(req.body)
//	  var appointment = {name: req.user,
//						date: req.body.date,
//						hour: req.body.hour,
//						comment: req.body.comment}
	 
	  console.log(req.body, "before adding the user to db")
	  //me duele la cabeza
		  Appointment.create(req.body, function(err,result){

			  if(err){
				  console.log(err)
				  res.json(err)
			  }
			  else{
				  console.log("Appointment added succesfully", result)
				res.json(result);}
		  });
	  };
    //your code here
   

	

  this.delete = function(req,res){
	  Appointment.remove({_id:req.params.id}, function(err){
		  if(err){
			  console.log('friends was not deleted', err);
		  }
		  else{res.json({message:'delete'});
	  }
  });
    //your code here
   
  };

}
module.exports = new AppointmentController(); // what does this export?
