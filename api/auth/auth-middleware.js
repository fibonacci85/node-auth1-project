
function restricted(req, res, next) {
  if (req.session && req.session.username) {
    next()
  }else{
    res.status(401).json({
      message: "you shall not pass!"
    })
  }
}

function checkUsernameFree(req, res, next) {
  if (req.session.username === req.session.username){
    res.status(422).json({
      message: "Username taken"
    })
    next()
  }
}


function checkUsernameExists(req,res,next) {
 if (!req.session.username){
  res.status(401).json({
    message: "invalid credentials"
  })
  next()
}
}


function checkPasswordLength(req,res,next) {
 if (req.session.password.length < 3) {
   res.status(422).json({
     message: "Password must be longer than 3 chars"
   })
   next()
 }
}

module.exports = {
  restricted,
  checkUsernameFree,
  checkUsernameExists,
  checkPasswordLength
}