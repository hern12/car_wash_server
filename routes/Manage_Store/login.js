var express = require('express');
var router = express.Router();

router.post('/',function(req,res,next){
    var db = req.dbCon
    var username = req.body.N_USERNAME
    var password = req.body.N_PASSWORD
    var query = `select N_USERNAME,N_PASSWORD from store where N_USERNAME = '${username}' and N_PASSWORD = '${password}'`
    executedata(db,query,res)
})


var executedata = function(db,query,res){
    db.query(query,function(error, results, fields){
      if (error) throw error;
      if(results.length > 0){
        res.send('Login successful')
      }else{
        res.send('Username or password is invalid')
      }
    })
  }

  module.exports = router;