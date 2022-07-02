const express = require("express");
const colors = require("colors")
require("dotenv").config()
const app = express();


port = process.env.PORT;


app.listen(() => {
    console.log(`server run in port ${port}`.blue)
})