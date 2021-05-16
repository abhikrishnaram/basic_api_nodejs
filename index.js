const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const Article =  require('./models/article.js');
const articleRoutes = require('./routes/articles.js')

mongoose 
 .connect(process.env.MONGO_PROD_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));


app.use('/api/articles',articleRoutes);


app.listen(6400, ()=>{console.log("Server initiated....")});