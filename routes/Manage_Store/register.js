var express = require('express');
var router = express.Router();

//post 
//register new user into store table
router.post('/',function(req, res, next) {
    var db = req.dbCon 
    var dataObj = req.body
    var query = `select N_USERNAME from store where N_USERNAME = '${req.body.N_USERNAME}'`
    checkUserExist(db,query,res,dataObj)
    
})

//check user name is Exist
var checkUserExist =  function(db,query,res,dataObj){
    db.query(query,function(error, results, fields){
        if (error){throw error;} 
        //if user name exist return Username is exist
        if(results.length > 0){
            if(results[0].N_USERNAME == dataObj.N_USERNAME){
                res.send('Username is exist')
            }
        }
        //if user name is not exist then insert data to database
        else
        {
            var insertQuery = `Insert into store (N_USERNAME,N_PASSWORD,N_STORE_NAME,N_Email,N_MOBILE_NUMBER,D_CREATE_DATE,D_UPDATED_DATE) 
                               values ('${dataObj.N_USERNAME}','${dataObj.N_PASSWORD}','${dataObj.N_STORE_NAME}',
                               '${dataObj.N_Email}',
                               '${dataObj.N_MOBILE_NUMBER}',NOW(),NOW())`
            executedata(db,insertQuery,res) //go to line 36
        }
    })
}

var executedata = function(db,query,res){
    db.query(query,function(error, results, fields){
      if (error){throw error;} 

      res.send(results)
    })
}




module.exports = router;