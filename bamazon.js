const inquirer = require("inquirer");

const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "top_5000_songs_DB"
  });

  
inquirer.prompt([
    {
      name: "name",
      message: "What is this ID of the item you wish to purchuse?"
    },

    {
        name: "units",
        message: "How many units do you wish to purchuse?"
      },
  ]).then(function(answers) {
const purchusedItem = answers.name
const itemUnits = answers.units
  });

  
// function readtable(artist) {
//     console.log("Selecting artist top_songs...\n");
//     connection.query("SELECT * FROM top_songs where artist=" + `"` + artist+ `"`, function(err, res) {
//       if (err) throw err;
//       console.log(res);
//       connection.end();
//     });
// }



// console.log(readtable())
