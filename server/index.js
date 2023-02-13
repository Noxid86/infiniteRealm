const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const Mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/chatExplorer';
try {
    Mongoose.connect(uri, {useNewUrlParser: true})
} catch (error) {
    console.log(error);
}
const {Room, Player} = require('./schemas');

const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require('openai');
const app =  express();
const port = process.env.PORT || 5000; 

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY, 
})

const openai =  new OpenAIApi(configuration);
app.use(express.json());
app.use('/', require('./routes'));



app.listen(port, ()=> console.log(`Server Listening on port ${port}`));
