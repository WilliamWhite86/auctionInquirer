const inquirer = require("inquirer");
const mysql = require("mysql");


function inq() {




    inquirer
        .prompt(
            [

                {
                    type: "list",

                    name: "Post an Item ",

                    message: "What would you like to post?",

                    choices: ["car", "bed", "girlfriend"]

                },
                {
                    type: "list",

                    name: "BID an Item ",

                    message: "What would you like to BID?",

                    choices: ["car", "bed", "girlfriend"]


                }
            ])
        .then(answers => {
            console.log("its working");


        });

};


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Vip2004.",
    database: "auction_db"
})

connection.connect((err) => {
    if (err) throw err;


    console.log("Database is connected!");
    connection.end();
});

inq();

// connection.query("SELECT * FROM products WHERE flavor=?;", [flavor], (err, res) => {
//     if (err) {
//         throw err;
//     }
//     res.forEach((row) => {
//         console.log(`The price for ${flavor} is ${row.price}`);
//     });
// });