const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const Routers = require('./src/router/router');
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api",Routers);

app.listen(process.env.PORT,()=>{
    console.log("localhost:3000");
});