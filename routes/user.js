var express = require('express');
var router = express.Router();
const userHelpers = require('../helpers/user-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('users/registration-form')
});

module.exports = router;
