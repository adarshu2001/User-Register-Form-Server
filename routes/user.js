var express = require('express');
var router = express.Router();
const userHelpers = require('../helpers/user-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users/registration-form')
});

router.post('/register-form',(req,res) => {
  userHelpers.userData(req.body).then((resp) => {
    res.redirect('/')
  })
})

module.exports = router;
