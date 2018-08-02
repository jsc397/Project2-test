const express = require('express')
const router = express.Router();
const problemController = require("../controllers/problem.js")

router.get("/", problemController.index)

module.exports = router