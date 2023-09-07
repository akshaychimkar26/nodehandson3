const express=require('express')
const routes=require('./Routes/routee')
const auth = require('./middleware/auth')
const auth2 = require('./middleware/auth2')
const app=express()
app.use('/routes',routes)
app.use(auth)
app.use(auth2)

app.listen(2300,()=>{
    console.log('port 2300');
})