const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});
// here is where we first console log all the information to the terminal for the customer's sake.
connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
  if (err) throw err;
  console.table(res)
   // after the customer has browsed for a bit he/she is promped two questions.
  inquirer.prompt([
    {
      name: "name",
      message: "What is this ID of the item you wish to purchuse?"
    },

    {
      name: "units",
      message: "How many units do you wish to purchase?"
    },
  ]).then(function (answers) {
    readtable(answers);
  });

  // here is where the customers answers are recorded and are used to interact with mySQL.
  function readtable(answers) {
    connection.query("SELECT item_id FROM products", function (err, res) {
      if (err) throw err;
      const Id = answers.name;
      connection.query("SELECT price, product_name, stock_quantity FROM products WHERE item_id=" + Id, function (err, res) {
// here the old stock quantity of the item they purchused is turned into a string. Also the new stock quantity is calcuted here as well.
        const oldStockQuantity = res[0].stock_quantity;
        const newStockQuantity = oldStockQuantity - answers.units;
        const array = [];
        const json = JSON.stringify(oldStockQuantity);
        array.push(json);
        const price = res[0].price * answers.units;
// If there is not enough stock quantity then the msg "Insufficent Stock!" is displayed.
        if (answers.units > oldStockQuantity) {
          console.log("Insufficent Stock!");
          connection.end();
        }
// if there is enough stock quantity then the SQL data base is updated with the new stock quantity.
        if (oldStockQuantity > answers.units) {
          connection.query("UPDATE products SET stock_quantity=" + newStockQuantity + " WHERE stock_quantity=" + array[0]);
          console.log("Your total comes to " + price + "$")
          console.log("Thank you for shopping with Bamazon.")
          console.log("Have a nice day!")
        }
        connection.end();
      })
    });
  }
});


