const express = require('express')
const router = express.Router()
const pagesContorller = require('../controller/pages')
const chechAuth = require('../middleware/check-auth')

// localhost:3000
router.get('/', pagesContorller.home)

// localhost:3000/about
router.get('/about', chechAuth, pagesContorller.about)

// localhost:3000/news
router.get('/news', chechAuth, pagesContorller.news)

// localhost:3000/contact
router.get('/contact', chechAuth, pagesContorller.contact)

// localhost:3000/login
router.get('/login', pagesContorller.login)

// localhost:3000/admin
router.get('/admin', chechAuth, pagesContorller.admin)

module.exports = router