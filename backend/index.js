const express = require('express')
var cors = require('cors')

const connectToMongo = require('./db')
const Paitent = require('./models/Paitent')
const router = express.Router();
const app = express()
connectToMongo();


app.use(cors())

app.use(express.json())
//available routes
app.use('/api/paitent', require('./routes/paitent'))
app.use('/api/doctor', require('./routes/doctor'))
app.use('/api/appointment', require('./routes/appointment'))


app.listen(5000, () => {
    console.log("server is running on port 5000")
})