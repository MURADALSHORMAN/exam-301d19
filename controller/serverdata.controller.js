'use strict';

const mongoose = require('mongoose');

const gamemodel = require('../models/serverdata.model');

const postGamedata = async (req, res) => {

    const {
        gender,
        img,
        id,
        name,
        psiPowers,
    } = req.body

    gamemodel.gamemodel.find({ id: id }, (error, data) => {

        if (data.length > 0) {
            res.send('Data Already Exist');
        } else {
            const newGamemodel = new gamemodel.gamemodel({
                gender:gender,
                img:img,
                id:id,
                name:name,
                psiPowers:psiPowers,
            });
            newGamemodel.save();
            res.send(' The Data Saved ');
        }
    }).catch(error=>(console.log(error)))

}
//////////////get ////////////////////////////////////

const getGamedata = async (req, res) => {


    gamemodel.gamemodel.find({ }, (error, data) => {

        if (data.length <= 0) {
            res.send('No DATA');
        } else {
            
           
            res.send(data);
        }
    }).catch(error=>(console.log(error)))

}
//////////////////////////delete//////////////////////////
const deleteGamedata = async (req, res) => {

    const {
        gender,
        img,
        id,
        name,
        psiPowers,
    } = req.body

    gamemodel.gamemodel.remove({ id: id }, (error, data) => {

      if (error){
        res.send(error);
      }else{
        res.send('Data deleted');
        
        gamemodel.gamemodel.find({ }, (error, data) => {

                        
               
                res.send(data);
            
        })}

    }).catch(error=>(console.log(error)))

}

////////////////////////////////update///////////////

const updateGamedata = async (req, res) => {

    const {
        gender,
        img,
        id,
        name,
        psiPowers,
    } = req.body

    gamemodel.gamemodel.find({ id: id }, (error, data) => {

        if (data.length > 0) {
            data[0].name=name;
            data[0].gender=gender;
            data[0].save();

            gamemodel.gamemodel.find({ }, (error, data) => {

                if (data.length <= 0) {
                    res.send('No DATA');
                } else {
                    
                   
                    res.send(data);
                }
            })

            
        } else {
         
            
            res.send(' there is no data ');
        }
    }).catch(error=>(console.log(error)))

}

module.exports={postGamedata,getGamedata,deleteGamedata,updateGamedata}