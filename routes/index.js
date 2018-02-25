var express = require('express');
var router = express.Router();

var sess;
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var db = req.dbCon
  var query = 'select * from car_brand'
  executedata(db,query,res)
});


var executedata = function(db,query,res){
  db.query(query,function(error, results, fields){
    if (error) throw error;
    console.log('The result iss: ', results);
    res.send(results)
  })
}

module.exports = router;
