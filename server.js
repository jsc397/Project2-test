const express = require ('express')

const app = express()

app.use(require('./routes/index.js'))

app.listen(4001, () => console.log("Locked and loaded on port 4001!"))