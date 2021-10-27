const { resolveSoa } = require('dns');
const express = require('express');
const router = express.Router();
const {Traveller,Trip} = require('../../models');

router.get("/", (req, res) => {
    Traveller.findAll({
        include: [Trip]
    }).then(dbTravellers => {
        if(dbTravellers.length){
            res.json(dbTravellers)
        } else {
            res.status(404).json({message: "No travellers found!"})
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({message: "an error occured", err:err})
    })
})

router.post("/", (req, res) => {
    
})
