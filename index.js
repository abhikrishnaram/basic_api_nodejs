const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const Article =  require('./models/article.js');
const articleRoutes = require('./routes/articles.js')
const auth = require('./auth.js');
const cors = require('cors');

mongoose 
 .connect(process.env.MONGO_PROD_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

var corsOptions = {
  origin: '*',
  methods: ['GET'],
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization'] 
}

app.get('/', (req, res) => {    
    res.json({articles: "unauthorized"});
});

app.get('/api', (req, res) => {    
    res.json({articles: "unauthorized api"});
});

//app.use(cors(corsOptions))

//app.use(auth);

app.use('/api/articles',articleRoutes);


app.listen(process.env.PORT || 6400, ()=>{console.log("Server initiated....")});