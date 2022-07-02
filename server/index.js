const express = require('express')

require('dotenv').config()
const app = express()


app.get('/', (req, res) => {
    res.json({msg : "hello my express app"})
  })

  port = 8080

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})