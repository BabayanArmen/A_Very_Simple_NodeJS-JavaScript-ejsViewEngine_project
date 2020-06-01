const express = require('express')
const router = express.Router()
const articlesController = require('../controller/articles')
const chechAuth = require('../middleware/check-auth')


// localhost:3000/articles/add
router.post('/add', chechAuth, articlesController.add)

module.exports = router