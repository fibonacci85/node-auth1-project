// Require the `restricted` middleware from `auth-middleware.js`. You will need it here!

const router = require("express").Router();
const Users = require("./users-model");
const mw = require("../auth/auth-middleware");


router.get("/", mw.restricted, (req,res) => {
  Users.find()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(err => res.send(err));
})




module.exports = router;