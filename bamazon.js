const inquirer = require("inquirer");

const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
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
readtable(answers)
  });

  
function readtable(answers) {
    connection.query("SELECT * FROM products where stock_quantity =" + `"` + answers.units + `"`, function(err, res) {
      if (err) throw err;
      if(answers.units < 1){
          console.log("Insufficient quantity!");
      }
      connection.end();
    });
}

// const updateTable = () => {

// }




