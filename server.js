const app=require('./app/app');

//Starting the server
app.listen(3030,"127.0.0.1",(err,address)=>{
    if(err){
        console.error(err);
        process.exit(1);
    }
    console.info(`Server is running on : ${address}`)
})
