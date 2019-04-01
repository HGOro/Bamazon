//add  mysql npm package to application allowing accessabilty to mysql functionality
var mysql = require("mysql");
//add inquirer npm package application allowing accesibility to inquirer's functionality
var inquirer = require("inquirer");
var customer = require("./customer.js")

//callling on a method from the mysql npm package and passing in all of my database connection values
//storing these formatted values into a variable to be used when called upon
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "XXXX",
    database: "bamazon"
});

//calling on the createConnection information (database properties)
//actually creating a connection using those properties (with .connect method)
connection.connect(function(err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId + "\n");
    bamazon();
});

//prompt user who they are: customer, manager, supervisor
function bamazon(){
    inquirer
        .prompt({
            name: "userView",
            type: "list",
            message: "Who are you?",
            choices: ["customer", "manager", "supervisor", "Exit"]
        })
        .then(function(answer){
            console.log("answer", answer)
            switch(answer.userView){
                case "customer":
                    customer.customerView(connection)
                break;
                case "manager":
                //    managerView()
                    console.log("Manager functionality WIP")
                break;
                case "supervisor":
                //    supervisorView()
                    console.log("Supervisor functionality WIP")
                break;
                default:
                    console.log("end")
                    connection.end();
                break;
            }
        })
}