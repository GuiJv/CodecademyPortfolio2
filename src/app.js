const express = require('express')
const app = express()
const PORT = 3000
const envelopeRouter = require('./routes')
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.listen(PORT, () =>{
    console.log(`Server listening to port ${PORT}`)
})

app.use('/envelope/', envelopeRouter)
app.use('/', (req,res,next) =>{
    res.status(404).send('Not Found')
})