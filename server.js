'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const DB = process.env.DATABASE_URL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
//////////////////////////////////////////////////
const gameAPI=require('./controller/gameAPI.controller');

const gameData=require('./controller/serverdata.controller');

// API proof of life
app.get('/', (req, res) => {
    res.send('everything is working!')
});
///////////get the data from API////////////
app.get('/get-characters',gameAPI.gameAPIdata );

///////////////////////////////////////////////
//////////////CRUD////////////////////////////

////////////create 'post' date to the database/////////////
app.post('/favorite',gameData.postGamedata);
////////////delete date from the database/////////////
app.delete('/favorite', gameData.deleteGamedata);
////////////get date from the database/////////////
app.get('/favorite', gameData.getGamedata);
////////////update 'put' date from the database/////////////
app.put('/favorite',gameData.updateGamedata );

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
