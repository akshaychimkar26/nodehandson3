const auth2=(req,res,next)=>{
    console.log('auth2 middleware');
    next()
}
module.exports=auth2