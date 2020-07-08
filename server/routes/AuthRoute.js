const mongoose = require("mongoose");
const passport = require("passport");
const {
    generateAccessToken,
    authenticate,
    respond
} = require("../middleware/AuthMiddleware");

const User = require("../models/User");

module.exports = (app) => {
    app.post("/account/register", (req, res) => {       
        User.register(
            new User({ username: req.body.email }), req.body.password,
            function (err, account) {
                if (err) {
                    res.send(err);
                }
                passport.authenticate("local", { session: false }) (req, res, () => {
                    res.status(200).send("Successfully Created Account!");
                });
            }
        );

    });

    app.post(
        "/account/login",
        passport.authenticate("local", { session: false, scope: [] }),
        generateAccessToken,
        respond
    );

    app.get("/account/me", authenticate, (req, res) => {
        res.status(200).json(req.user);
    });
};