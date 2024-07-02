const mongoose = require('mongoose');
const { Schema } = mongoose;

const PaitentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Paitent', PaitentSchema);