const express = require('express')
const Paitent = require('../models/Paitent')
const router = express.Router()

//get all patients
router.get('/', async (req, res) => {
    const data = await Paitent.find({})
    res.json(data)
})

//Add paitent
router.post('/add', async (req, res) => {
    try {
        const { name, age, gender } = req.body
        if (!name || !age || !gender) {
            return res.status(400).json({ error: "sarkho data nakho pela" })
        }
        const paitent = new Paitent({ name, age, gender })
        const savePaitent = await paitent.save()
        res.json(savePaitent)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    }

})

//Update paitent
router.put('/update/:id', async (req, res) => {
    try {
        const { name, age, gender } = req.body
        const id = req.params.id;
        const newPaitent = {};
        if (name) { newPaitent.name = name }
        if (age) { newPaitent.age = age }
        if (gender) { newPaitent.gender = gender }

        let paitent = await Paitent.findByIdAndUpdate(
            id,
            { $set: newPaitent },
            { new: true }
        )
        res.json(paitent)
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
        const deletedPatient = await Paitent.findByIdAndDelete(id);
        if (!deletedPatient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.json({ message: "Patient deleted successfully" }); // Send success message as a JSON response
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router