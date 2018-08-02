const mongoose = require("../db/connection")
const Schema = mongoose.Schema;

const User = new Schema ({

})

module.exports = {
    Problem: mongoose.model("User", User),
};
