console.log('users model');
var mongoose = require('mongoose');
var AppointmentSchema = new mongoose.Schema({
	name: { 
		type: String},
	date: { type: Date},
	hour: {
		type: String,
	},
	comment: {type: String,
			minlength: [10, "Comment must be at least 10 characters"],
			required:[true, "Field is required"]
			},
	birthday: {type: Date,
			   required: false,}
},{timestamps:true});
mongoose.model('Appointment', AppointmentSchema);

