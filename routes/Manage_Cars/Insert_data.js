var express = require('express');
var router = express.Router();

router.get('/ex_add',function(req,res){
    res.render('Manage_Cars/add_brands&model', { title: 'Add brand & model' });
})

router.post('/add_brands',function(req,res){
    var db = req.dbCon
    var N_BRAND_NAME = req.body.N_BRAND_NAME
    var N_DESCRIPTION = req.body.N_DESCRIPTION
    var query = `insert into car_brand(N_BRAND_NAME,N_DESCRIPTION) values ('${N_BRAND_NAME}','${N_DESCRIPTION}')`
    executedata(db,query,res)
})


router.post('/add_models',function(req,res){
    var db = req.dbCon
    var N_MODEL_NAME = req.body.N_MODEL_NAME
    var I_CAR_BRAND_ID = req.body.I_CAR_BRAND_ID
    var N_SIZE = req.body.N_SIZE
    var N_DESCRIPTION = req.body.N_DESCRIPTION
    var query = `insert into car_model(I_CAR_BRAND_ID,N_MODEL_NAME,N_SIZE,N_DESCRIPTION) values (${I_CAR_BRAND_ID},'${N_MODEL_NAME}','${N_SIZE}','${N_DESCRIPTION}')`
    executedata(db,query,res)
})

var executedata = function(db,query,res){
    db.query(query,function(error, results, fields){
      if (error){throw error;} 
      console.log(results)
      res.send(results)
    })
}
module.exports = router;