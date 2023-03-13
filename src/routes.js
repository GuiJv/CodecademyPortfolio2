const express = require('express')
const { groceryBudget } = require('./envelopes')
const envelopeRouter = express.Router()
const envelopes = require('./envelopes')


envelopeRouter.param('envelope', (req,res,next, envelope) =>{
    if(envelopes.hasOwnProperty(envelope)){
        console.log(envelopes[envelope])
        req.envelope = envelopes[envelope]
        next()
    }else{
        res.status(404).send('Not Found Envelope')
    }
})


envelopeRouter.post('/', (req,res,next) => {
    envelopes[req.body.envelope] = 0
    res.status(201).send('Created')}
)

envelopeRouter.get('/', (req,res,next) => {
        res.status(200).send(envelopes)   
})

envelopeRouter.get('/:envelope/', (req,res,next) => {
    const envelope = req.envelope
    res.status(200).send(`${envelope}`)
})




module.exports = envelopeRouter

