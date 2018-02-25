var express = require('express');
var router = express.Router();


router.get('/:username',function(req,res,next){
    var checkInsert = 'Insert'
    var db = req.dbCon
    var username = req.params.username
    var query = `select I_STORE_ID,N_USERNAME from store where N_USERNAME = '${username}'`;
    executedata(db,query,res,checkInsert)
})


router.post('/ChangePassword',function(req,res,next){
    var checkUpdate = 'Update'
    var db = req.dbCon
    var storeID = req.body.storeID
    var username = req.body.N_USERNAME
    var oldPassword = req.body.oldPassword
    var newPassword = req.body.newPassword
    var query = `update store set N_PASSWORD = '${newPassword}' where I_STORE_ID = ${storeID} and N_PASSWORD = '${oldPassword}'
                 and N_USERNAME = '${username}'`
    executedata(db,query,res,checkUpdate)
})


var executedata = function(db,query,res,queryType){
    db.query(query,function(error, results, fields){
      if (error) throw error;
      if(queryType == 'Insert'){
        if(results.length > 0){
                res.send(results)
            }else{
                res.send('get user fail')
        }
      }else if(queryType == 'Update'){
          if(results.changedRows == 1){
            res.send('Change Password Complete')
          }else{
            res.send('Old password incorrect')
          }
      }
    })
  }

  module.exports = router;