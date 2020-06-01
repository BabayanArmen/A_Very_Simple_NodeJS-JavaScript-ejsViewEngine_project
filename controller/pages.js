// const path = require('path')
// const jwt = require('jsonwebtoken')
const Article = require('../models/article')

exports.home = (req, res) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
    res.render('index', { path: "/"}) // using view engine
}

exports.about = (req, res) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'about.html'));
    res.render('about', { path: "/about"}) // using view engine
}

exports.news = (req, res) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'news.html'));
    res.render('news', { path: "/news", articles: Article.getArticles()}) // using view engine
}

exports.contact = (req, res) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'contacts.html'));
    res.render('contacts', { path: "/contact"}) // using view engine
}

exports.login = (req, res) => {
    // res.sendFile(path.join(__dirname, '../', 'views',  'login.html'));
    res.render('login') // using view engine
}

exports.admin = (req, res) => {
    // console.log(req.status) // added status to request in checkAtuth middleware
    if(req.status === 'admin'){
    // console.log(`this is ${users.admin()}`)
    res.render('admin', { path: "/admin"}) // using view engine
    } else {
        res.status(401).json({message: "Admin Auth Failed"})
    }
}