var express = require('express');
var router = express.Router();

//get all brand
router.get('/brand',function(req,res,next){
    var db = req.dbCon 
    var query = `select * from car_brand`
    executedata(db,query,res)
})


//get all model
router.get('/model',function(req,res,next){
    var db = req.dbCon 
    var query = `select * from car_model carmo
                 inner join car_brand carbra on carmo.I_CAR_BRAND_ID = carbra.I_CAR_BRAND_ID`
    executedata(db,query,res)
})

var executedata = function(db,query,res){
    db.query(query,function(error, results, fields){
      if (error){throw error;} 

      res.send(results)
    })
}


module.exports = router;