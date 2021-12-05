const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const auth = require('../middlewares/auth')


router.post('/signup', authController.signup)
router.post('/login',authController.login)
router.put('/update_profile',auth,authController.update_profile)
router.delete('/delete_profile',auth,authController.delete_profile)

module.exports = router