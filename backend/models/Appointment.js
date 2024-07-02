const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    patientName: { type: String, required: true },
    doctorName: { type: String, required: true },
    date: { type: Date, required: true },
    // Add more fields as needed
});

module.exports = mongoose.model('Appointment', AppointmentSchema);

