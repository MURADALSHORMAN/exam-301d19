'use strict';
const mongoose = require('mongoose');


const psiSchema = new mongoose.Schema({
    psiPowers: String
});
// const psimodel = mongoose.model('psimodel', psiSchema);
/////////////////////////////////////////////////////////

const gameSchema = new mongoose.Schema({

    gender: String,
    img :String,
    id:{
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },
    name: String,
    psiPowers : [{psiPowers:String}],

});
console.log('error from here');
const gamemodel = mongoose.model('gamemodel', gameSchema);

module.exports={gamemodel}