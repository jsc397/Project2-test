// mongoose.connect('mongodb://localhost/db_name')
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/testdb", { useNewUrlParser: true }) //testdb for neatify
mongoose.Promise = Promise
module.exports = mongoose