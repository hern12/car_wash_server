var express = require('express');
var router = express.Router();

var sess;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Car wash system server side by Kimbly the GOD' });
});


module.exports = router;
