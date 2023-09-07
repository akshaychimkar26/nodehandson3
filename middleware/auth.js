const auth=(req,res,next)=>{
    console.log('auth1 middleware');
    next()
}
module.exports=auth