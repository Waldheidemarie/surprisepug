var express = require('express');
var router = express.Router();
var people = require('../../profiles-surprisegroup/people.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  console
  res.render('index', { title: 'Express',people:people.profile });
});

module.exports = router;
