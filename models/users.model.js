const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserShema = new Schema({
    user: {type: String, require: true, max: 100},
    pass: {type: String, require: true.valueOf, max: 128}
});

module.exports = mongoose.model("users", UserShema);