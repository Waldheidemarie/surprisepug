var express = require('express');
var router = express.Router();
var people = require("../data/people.json")
/* GET home page. */
router.get('/:peopleinfo', function(req, res, next) {
var people =people.profile.find(p => p.id ==req.params.peopleinfo)
people.peoples = peoples.peoples
  res.render('people-info', people);
});

module.exports = router;