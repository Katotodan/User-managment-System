const mongoose = require('mongoose')
const scheme = new mongoose.Schema({
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require:true
    },
    phone:{
        type: String,
        require: true
    },
    comment:{
        type: String
    }
})

const addUserModel = mongoose.model('Users',scheme)
module.exports = addUserModel