var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'ns97.hostinglotus.net',
  user     : 'carwashs_system',
  password : '123qwe',
  database : 'carwashs_system'
});
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'car_wash_system'
// });

try{
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  })
}
catch(err){
  console.log(err)
}

module.exports = connection;