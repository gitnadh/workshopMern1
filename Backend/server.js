// import express
const express = require ('express');
// instanciation des methodes d'express dans une variable
const app = express ()
//import env 
require('dotenv').config({path:'./config/.env'})
// declaration de port
const port =  process.env.port||5000
// connect to DB
const connectdb = require ('./config/connectdb') 
connectdb()
//Parse body
app.use(express.json())




/**
 * set the routes
 */
// product routes
app.use('/product',require ('./routes/productRoutes'))



//mettre le serveur en ecoute
app.listen(port,(err)=>err? console.log(err) : console.log(`The server is running on port ${port}`))