const express = require('express')
const methodOverride = require('method-override')
const connectionDb = require('./db/dbConnection')
const addUserModel = require('./db/model')
const router = require('./router/router')

const app = express()
const port = process.env.PORT || 3500

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use('/viewUser',express.static('public'))
app.use('/editUser',express.static('public'))
app.set('view engine','ejs')
app.use('/', router)

app.get('/', async (req,res) =>{
    const users =await addUserModel.find({})
    res.render('home', {users: users})
})

const startServer = async() =>{
    await connectionDb()
    app.listen(port, console.log('Server is listening on port '+ port))
}
startServer()
