module.exports = (req, res, next) => {
  try{
    // better way to use cookie, session
    // console.log(req.session.isLoggedIN)
    if(req.session.isLoggedIN === "user" || req.session.isLoggedIN === "admin"){
      req.status = req.session.isLoggedIN
      next()
    }
    /////////////////////////////////////

    // simple way to use cookie, it works wery well
    // console.log(req.get('Cookie').split('=')[1].split('-')[1])
    // if((req.get('Cookie').split('=')[1].split('-')[1] === 'user' || req.get('Cookie').split('=')[1].split('-')[1] === 'admin')) {
    //     req.status = req.get('Cookie').split('=')[1].split('-')[1]
    //     next()
    // }
    /////////////////////////////////////
  }
  catch(error) {
    console.log(error)
    res.status(401).json({message: "auth failed"})
  }
}



