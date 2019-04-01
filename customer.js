//add  mysql npm package to application allowing accessabilty to mysql functionality
//var mysql = require("mysql");
//add inquirer npm package application allowing accesibility to inquirer's functionality
var inquirer = require("inquirer");
var Table = require('cli-table');

var customer = {
    customerView: function(connection){
        //customer should see all departments in a formatted table view
        //user should be prompted with a list of departments to choose from
        //user should see all products from department selected
        //user should be prompted with question of what product ID
        //user prompted with how many they'd like to buy 
        //query shuold be made to update item in product table
        //price total should be displayed to user
        //prompt user if they'd like to make another purchase or END
        //console.log("It Worked!")
        //1. Query product table for all dept names   
        connection.query("SELECT department_name FROM products GROUP BY 1", function(err, department){
            if (err) throw err;
            //console.log(department);
            //2. Prompt user to select a dept
            inquirer
                .prompt({
                    name: "department_name",
                    type: "rawlist",
                    message: "Select a department",
                    choices: function(){
                        var choiceArray = []
                        for (var i = 0; i < department.length; i++){
                            choiceArray.push(department[i].department_name)
                        }
                        return(choiceArray)
                    }
                })
                .then(function(answer){
                    //console.log(answer);
                    var selectedDepartment = answer.department_name
                    connection.query("SELECT * FROM products WHERE department_name = '"+ selectedDepartment +"'", function(err, items){
                        if (err) throw err;
                        //console.log("items", items)


                        var productobjsArr = [];
                        items.forEach(function(productObj){
                            //console.log("product object", productObj)
                            var productArr = [];
                            for (var key in productObj) {
                                //console.log("product obj key", key)
                                if (key === "product_name" || key === "department_name" || key === "price"){
                                    productArr.push(productObj[key]);
                                }
                            }
                            productobjsArr.push(productArr);
                        });
                
                        var table = new Table({
                        head: ['Product Name', 'Department Name', 'Price']
                        });
                
                        productobjsArr.forEach(function(products){
                            //console.log("products", products)
                            table.push(products);
                        })
                        console.log("\n");
                        console.log(table.toString());
                        console.log("\n");
                        //console.log(items);
                        inquirer
                            .prompt([
                                {
                                    name: "item_name",
                                    type: "rawlist",
                                    message: "What item would you like to purchase?",
                                    choices: function(){
                                        var choiceArray = []
                                        for (var i = 0; i < items.length; i++){
                                            choiceArray.push(items[i].product_name)
                                        }
                                        return(choiceArray)
                                    }
                                },
                                {
                                    name: "item_quantity",
                                    type: "input",
                                    message: "How many would you like to buy?",
                                    validate: function(value){
                                        if(!isNaN(value)){
                                          return true
                                        }
                                        return false
                                    } 
                                }
                            ])
                            .then(function(itemAnswer){
                                //console.log(itemAnswer);
                                //console.log(items);

                                var productStock = null
                                var productPrice = 0
                                var itemID = ""
                                var productQuantity = productStock - itemAnswer.item_quantity
                                for (var i = 0; i < items.length; i++){
                                    if (items[i].product_name === itemAnswer.item_name){
                                        productStock = items[i].stock
                                        productPrice = items[i].price
                                        itemID = items[i].item_ID
                                    }
                                }

                                if (productStock>itemAnswer.item_quantity){
                                    //query database to update that product stock and total items sold
                                    connection.query("UPDATE products SET ? WHERE ?", [{stock:productQuantity}, {item_id:itemID}], function(err, itemUpdate){
                                        if(err) throw err
                                        var total = parseInt(itemAnswer.item_quantity)*parseInt(productPrice)
                                        console.log("\n#######################")
                                        console.log("Item:", itemAnswer.item_name)
                                        console.log("Quantity:", itemAnswer.item_quantity)
                                        console.log("Your total is:", total)
                                        console.log("#######################")
                                        connection.end()
                                    })

                                }else{
                                    console.log("Sorry, not enough quantity")
                                    connection.end()
                                }

                            })
                    })
                })
        })     
    }
}

module.exports = customer;