const express = require('express')
const Appointment = require('../models/Appointment')
const router = express.Router()

//get Appointments
router.get('/', async (req, res) => {
    try {
        const data = await Appointment.find({})
        res.json(data)
    }
    catch (error) {
        console.log({ error: "Error in getting the data of Appointment" })
    }
})

//Add apointment
router.post('/add', async (req, res) => {
    try {
        const { patientName, doctorName, date } = req.body;
        const dateOnly = new Date(date).toISOString().split('T')[0];
        const newAppointment =
            new Appointment({ patientName, doctorName, date: dateOnly });

        newAppointment.save()
            .then(savedAppointment => res.json(savedAppointment))
            .catch(err => res.status(400).json('Error: ' + err));
    }
    catch (error) {
        console.log({ error: "Error in getting the data of Appointment" })
    }
})

//update
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const { patientName, doctorName, date } = req.body;
        const newAppointment = {}

        if (patientName) { newAppointment.patientName = patientName }
        if (doctorName) { newAppointment.doctorName = doctorName }
        if (date) newAppointment.date = new Date(date).toISOString().split('T')[0];

        let appointment = await Appointment.findByIdAndUpdate(id, { $set: newAppointment }, { new: true })
        res.json(appointment)
    }
    catch (error) {
        console.log({ error: "Error in getting the data of Appointment" })
    }
})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(id);
        if (!deletedAppointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.json({ message: "Appointment deleted successfully" }); // Send success message as a JSON response
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router