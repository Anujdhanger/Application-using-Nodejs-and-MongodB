const fastify=require('fastify')
const mongoose=require('mongoose');
const app=fastify();

app.get('/',(request,reply)=>{
    reply.code(200);
    return{
        message: 'server is up and running'
    }
})

mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.info('database connected successfully');
}).catch((err)=>{
    console.error(`Error connecting database. ${err}`);
    process.exit(1);
});
app.register(require('./auth/route'),{
    prefix: '/auth'
})

module.exports = app;
