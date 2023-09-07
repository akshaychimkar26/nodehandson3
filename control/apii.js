const register=(req,res)=>{
    res.send('registered')
}
const login=(req,res)=>{
    res.send('login')
}
const aboutus=(req,res)=>{
    res.send('aboutus page')
}
const contactus=(req,res)=>{
    res.send('contactus page')
}
const data=(req,res)=>{
    res.send('data')
}
module.exports={register,login,aboutus,contactus,data}