// Including Express Framework
const express = require("express")
const app = express() 

// Including Morgan Package
const morgan = require("morgan")
app.use(morgan("dev"))  


// Including Cors Package
const cors = require("cors")
app.use(cors())

// Connection to MongoDB
require("./connection/mongoose")

// Setting up the bodyParser
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
const Note = require("./routes/Note")
const User = require("./routes/User")

// Injections
app.use("/note", Note)
app.use("/user", User)

// The NodeJS App is running on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Running on Port: ${ port }`)
})

