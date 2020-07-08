const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountSchema = new Schema ({
    user_name: String,
    email: String,
    password: String
});


module.exports = mongoose.model("Account",AccountSchema);