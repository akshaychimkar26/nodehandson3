const auth = require('../middleware/auth')
const auth2 = require('../middleware/auth2')
const {register,login,aboutus,contactus,data}=require('../control/apii')
const routes=require('express').Router()
routes.get('/register',auth,register)
routes.get('/login',auth2,login)
routes.get('/data',data)
routes.get('/aboutus',aboutus)
routes.get('/contactus',contactus)

module.exports=routes