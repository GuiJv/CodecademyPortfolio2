const express = require('express')
const envelopeRouter = express.Router()
const envelopes = require('./envelopes')

envelopeRouter.post('/', (req,res,next) => {
    try{
        envelopes[req.body.envelope] = 0
        res.status(201).send('Created')}
    catch(err){
        res.status(500).send('Internal Server Error')
    }
})

envelopeRouter.get('/', (req,res,next) => {
    try{
        res.status(200).send(envelopes)   
    }catch(err){
        res.status(500).send()
    }
})




module.exports = envelopeRouter

