const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, () =>{
    console.log(`Server listening to port ${PORT}`)
})

app.use('/', (req,res,next)=>{
    res.send('Hello World')
})