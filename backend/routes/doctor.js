const express = require('express')
const Doctor = require('../models/Doctor')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const data = await Doctor.find({})
        res.json(data)
    }
    catch (error) {
        console.log({ error: "Error in getting the data of docroe" })
    }
})

//Add Doctor
router.post('/add', async (req, res) => {
    try {
        const { name, speciality } = req.body
        if (!name || !speciality) {
            return res.status(400).json({ error: "sarkho data nakho pela" })
        }
        const doctor = new Doctor({ name, speciality })
        const saveDoctor = await doctor.save()
        res.json(saveDoctor)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    }

})

//Update paitent
router.put('/update/:id', async (req, res) => {
    try {
        const { name, speciality } = req.body
        const id = req.params.id;
        const newDoctor = {};
        if (name) { newDoctor.name = name }
        if (speciality) { newDoctor.speciality = speciality }

        let doctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: newDoctor },
            { new: true }
        )
        res.json(doctor)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    }
})

// Delete patient by ID
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(id);
        if (!deletedDoctor) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.json({ message: "Patient deleted successfully" }); // Send success message as a JSON response
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
module.exports = router