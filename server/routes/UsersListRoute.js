const mongoose = require('mongoose');

const Account = require("../models/Account");

module.exports = (app) => {
    
    app.get("/user/all", (req,res) => {    
        Account.find({}, (err, Accounts) => {
            if (err) {
                console.log('Error', err);
            }
            return res.json(Accounts);
        });
    });

    app.delete("/user/:id", (req, res) => {
        Account.deleteOne({
            _id: req.params.id
        }, (err, Account) => {
            if (err) {
                console.log('Error', err);
            }
            return res.json({ message: "User Deleted!"});
        })
    });
};