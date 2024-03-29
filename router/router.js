const  express = require('express')
const {
    addNewUSer,
    viewUser,
    editUser,
    updateUser,
    deleteUser,
    searchUser
} = require('../controller/controller')
const router = express.Router()

router.route('/newUser').get((req,res) =>{
    res.render('newUser',{message:""})
}).post(addNewUSer)

router.route('/editUser/:id').get(editUser)
router.route('/viewUser/:id').get(viewUser)
router.route('/editUser/:id').put(updateUser)
router.route('/deteteUser/:id').delete(deleteUser)
router.route('/search').post(searchUser)
module.exports = router