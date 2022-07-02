const express = require('express')

require('dotenv').config()
const app = express()

const Routes = require('./routes/router')

app.use(express.json())
app.use('/api/routes',Routes);



  port = 8080

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})