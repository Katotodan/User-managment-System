const addUserModel = require('../db/model')

const addNewUSer = async (req,res) =>{
    try {
        const task = await addUserModel.create(req.body)
        res.render('newUser', {message:'User added successfully'})
    } catch (error) {
        res.render('newUser' , {message : 'User not added'})
    }
}
const viewUser = async(req,res)=>{
    try {
        const user = await addUserModel.findById(req.params.id)
        res.render('viewUser', {user: user})
    } catch (error) {
        console.log(error)
    }
}
const editUser = async(req,res)=>{
    try {
        const user = await addUserModel.findById(req.params.id)
        res.render('edit', {user: user, message:""})
    } catch (error) {
        res.render('edit', {user: user, message:"Some thing went wrong, please refresh"})
    }
}
const updateUser = async(req,res)=>{
    try {
        await addUserModel.findByIdAndUpdate(req.params.id, req.body)
        const user = await addUserModel.findById(req.params.id)
        res.render('edit', {user: user, message:'User updated'})
    } catch (error) {
        res.render('edit', {user: '', message:'Error'})
    }
}
const deleteUser = async (req,res) =>{
    try {
        await addUserModel.deleteOne({_id: req.params.id})
        res.redirect('/',)
    } catch (error) {
        res.redirect('/')
    }
}


module.exports = {
    addNewUSer,
    viewUser,
    editUser,
    updateUser,
    deleteUser
}
