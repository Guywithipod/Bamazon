const inquirer = require("inquirer");

const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
  if (err) throw err;
  console.log(res);

  
inquirer.prompt([
  {
    name: "name",
    message: "What is this ID of the item you wish to purchuse?"
  },

  {
    name: "units",
    message: "How many units do you wish to purchuse?"
  },
]).then(function (answers) {

  readtable(answers)
});
});

function readtable(answers) {
  connection.query("SELECT price, product_name FROM products", function (err, res) {
    if (err) throw err;

    if (answers.units < 1) {
      console.log("Insufficient quantity!");
    };

    connection.end();
  });
}

// const updateTable = () => {

// }
