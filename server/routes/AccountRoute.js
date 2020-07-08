const mongoose = require('mongoose');

const Account = require("../models/Account");

module.exports = (app) => {
    app.post("/adduser",(req,res) => {
        let newAccount = new Account();

        newAccount.user_name = req.body.user_name;
        newAccount.email = req.body.email;
        newAccount.password = req.body.password;
        

        newAccount.save((err) => {
            if (err) {
                console.log('Error, err');
            }
            res.send({ message: "Account added!" });
        });
    });


    app.get("/user/all", (req,res) => {    
        Account.find({}, (err, Accounts) => {
            if (err) {
                console.log('Error', err);
            }
            return res.json(Accounts);
        });
    });
};