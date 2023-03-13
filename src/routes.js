const express = require('express')
const envelopeRouter = express.Router()
const envelopes = require('./envelopes')

envelopeRouter.post('/', (req,res,next) => {
    try{
        console.log(req.body)
        envelopes[req.body.envelope] = 0
        console.log(envelopes)
        res.status(201).send('Created')}
    catch(err){
        res.status(500).send('Internal Server Error')
    }
})





module.exports = envelopeRouter

