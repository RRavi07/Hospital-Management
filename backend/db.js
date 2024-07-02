const mongoose = require('mongoose')
const URL = "mongodb://localhost:27017/HM"

const connectToMongo = async () => {
    try {
        await mongoose.connect(URL)
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongo;
