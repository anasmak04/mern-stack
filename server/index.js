const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors')
require('dotenv').config();
const app = express();
app.use(express.json());


const Routes = require('./routes/router');
app.use('/api/routes',Routes);

app.use((req,res, next) => {
  console.log(req.path,req.method)
  next()
})

/// mongodb
mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log(`database connected`.green)
})
.catch((err) => {
  console.log(err)
})




  port = 8080

  app.listen(port, () => {
    console.log(`server run in ${port}`)
  })