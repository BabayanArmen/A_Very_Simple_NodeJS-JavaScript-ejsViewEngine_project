const express = require('express')
const pagesRoute = require('./routes/pages')
const usersRoute = require('./routes/users')
const articles = require('./routes/articles')
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const PORT = process.env.PORT || 3000


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

// this is session, for using cookies
app.use(session({secret: 'secret-key', resave: false, saveUninitialized: false}))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', pagesRoute)
app.use('/user', usersRoute)
app.use('/articles', articles)

app.listen(PORT, () => { console.log(`server started on port ${PORT}`) })