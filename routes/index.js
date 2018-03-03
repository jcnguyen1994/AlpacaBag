var express = require('express');
var router = express.Router();
/* GET home page. */

const CountryModel = require('../consolidation.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/country', function(req, res, next) {

  // CountryModel.find({}, function(err, data) {
  CountryModel.find().exec(function(err, data) {
    console.log('HELLO');
    console.log(data, err);
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(data);
      // res.send('Yo');
      // return;
      res.send(data);
      return;
    }
  });
});

module.exports = router;
