const inquirer = require("inquirer");

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
  if (err) throw err;
  for (let i = 0; i < res.length; i++) {
    console.log("Item ID:" + res[i].item_id + "     Product Name:" + res[i].product_name + "        Price:" + res[i].price);

  }

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


  function readtable(answers) {
    connection.query("SELECT item_id FROM products", function (err, res) {
      if (err) throw err;

      const Id = answers.name
      console.log(Id)

      connection.query("SELECT product_name, stock_quantity FROM products WHERE item_id=" + Id, function (err, res) {

        console.log(res[0].product_name)
        
        const oldStockQuantity = res[0].stock_quantity;
        const newStockQuantity = oldStockQuantity - answers.units;
        const array = []
        const json = JSON.stringify(oldStockQuantity)
        array.push(json)
        console.log(array)

        console.log(newStockQuantity,oldStockQuantity)

        if (answers.units > oldStockQuantity) {
          console.log("Insufficent Stock!")
          connection.end();
        }

       if(oldStockQuantity>answers.units){
        connection.query("UPDATE products SET stock_quantity=" +  newStockQuantity + " WHERE stock_quantity=" + array[0] );
       }

        

        connection.end()
      })


    });
  }
});


