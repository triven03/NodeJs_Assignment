const mysql = require('mysql2');

let con= mysql.createConnection({
  host: "localhost",
  database: 'tri',
  user: "root",
  password: "Trivendra@20"
})

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

module.exports = con;
