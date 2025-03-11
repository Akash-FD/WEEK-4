const express = require('express')
const app = express()

app.use((req, res, next)=>{
    console.log('this is middleware');
    next()
    
})
app.get('/' , (req, res)=>{
    res.send('this is home page')
})

app.listen(3000, ()=>{console.log('server is running')})