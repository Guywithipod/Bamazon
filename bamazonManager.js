const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

inquirer.prompt([
    {
        type: 'list',
        name: 'theme',
        message: 'What do you want to do?',
        choices: ["View Products for Sale",
            "View Low Inventory",
            "Add to Inventory",
            "Add New Product"]
    }]).then(function (answers) {
        const managerRequest = answers.theme

        switch (managerRequest) {
            case "View Products for Sale":
                viewProducts();
                break;
            case "View Low Inventory":
                viewLowInventory();
                break;
            case "Add to Inventory":
                addToInventory();
                break;
            case "Add New Product":
                addNewProduct();
                break;
        }

    });

const viewProducts = () => {
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function (err, res) {
        if (err) throw err;
        console.table(res)
})
}


// const viewLowInventory = () => {

// }

// const addToInventory= () => {

// }

// const addNewProduct = () => {

// }