// const path = require('path')

exports.login = (req, res) => {
    var username = req.body.username
    var password = req.body.password
    if(username === 'a' && password === 'a'){
        // better way for cookie, session
        req.session.isLoggedIN = "user"  //session cookie
        req.session.save((err) => { // we need this to be sure that session is ceated and stored in mongodb store, but we can do not use this
            // console.log(err)
            res.status(200).json({login: true, status: 'user'}) 
        })
        
        // res.cookie('AuthCookie', 'key-user') // simple cookie
        
    } else {
        if(username === 'admin' && password === 'admin'){
        // better way for cookie, session
        req.session.isLoggedIN = "admin" //session cookie
        req.session.save((err) => { // we need this to be sure that session is ceated and stored in mongodb store, but we can do not use this
            // console.log(err)
            res.status(200).json({login: true, status: 'admin'})
        })
            
        // res.cookie('AuthCookie', 'key-admin') // simple cookie
            
        }else res.status(401).json({login: false})
    }
}

exports.logout = (req, res) => {
    // useing simple cookies
    // res.clearCookie('AuthCookie')
    //////////////////

    // second , better way of using cookies, session
    req.session.destroy((err) => {   // session.destroy we need for removing session from mongoDB storage
        // console.log(err)
        res.clearCookie('connect.sid')  // we need this to imidiatly remove cookie from browser srotage
        res.status(200).json({message: 'Good Bye'})
    })
    ////////////////////
}
