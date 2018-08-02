const mongoose = require("../db/connection")
const Schema = mongoose.Schema;

const Problem = new Schema({
    paragraph: String
    // paragraph2: String,
    // paragraph3: String
})

module.exports = {
    Problem: mongoose.model("Problem", Problem),
};