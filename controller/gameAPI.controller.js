'use strict';

const superagent = require('superagent');
require('dotenv').config();

const apimodel=require('../models/APIdata.model');

const gameAPIdata = async (req,res)=>{

    superagent.get(process.env.API_URL).then(data=>{

        const apiData=data.body.map(data=>{
            const psi=data.psiPowers.map(psidata=>{

                return new apimodel.psiPower(data);
            })
           let lastApidata=new apimodel.apidatamodel(data);
           lastApidata.psiPowers=psi;
            return lastApidata

        });
        res.send(apiData);
    }).catch(console.error);
}

module.exports={gameAPIdata};