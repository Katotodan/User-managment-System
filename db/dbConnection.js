const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set('strictQuery', false)
const connectionDb = ()=>{
    return mongoose.connect(process.env.CONNECTION_URL)
    .then(console.log('connected to the database'))
}

module.exports = connectionDb