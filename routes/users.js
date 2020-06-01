const express = require('express')
const router = express.Router()
const userContorller = require('../controller/users')

// localhost:3000/user/login
router.post('/login', userContorller.login)

// localhost:3000/user/logout
router.get('/logout', userContorller.logout)

module.exports = router