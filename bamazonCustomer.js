// dependencies 
var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');
require('dotenv').config();

// mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: process.env.DB_PASSWORD,
    database: "bamazon"
  });

//   connect to database
  connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connected as id:  ${connection.threadId}`);
  
    connection.end();
  })


//  displaying items availible from database 
var displayAndBuy = function() {
// querying the database connection to throw data into table
  connection.query('SELECT * FROM products', function(err, res) {
      if (err) throw err;

// creating table in CLI-TABLE
var table = new Table ({
    head: ['Item Id', 'Product Name', 'Department Name', 'Price', 'Stock Quantity']
    });

 // displaying items from database in table; using push method to loop through each row and display in the table
console.log(`Here's everything we have in stock: `);
for (var i = 0; i < res.length; i++) {
    table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
}
console.log(table.toString());


// using inquirer to prompt user on what they want to purchase & the quantity
inquirer.prompt([
    {
    name: 'item_id',
    type: 'input',
    message: 'Select the Item Id that you would like to purchase'
    },
    {
    name: 'quant',
    type: 'input',
    message: 'How many would you like to purchase?',
    }
]).then(function(ans) {
    // storing answer responses in a variable to use later
    var idPicked = ans.item_id;
    var quantPicked = ans.quant;

    // logic for taking user's desired amount of items purchased and item id to update in DB
    // also displaying what product the user picked & calculating total based on quantity
    // var productPicked = res[idPicked];
    if (quantPicked < idPicked.stock_quantity) {
        console.log(`Your total for [${quantPicked} ${idPicked}] is ${idPicked.price * quantPicked}`)
    }

    displayAndBuy();
})


   })
}

displayAndBuy();