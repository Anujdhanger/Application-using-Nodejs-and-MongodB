const userService = require('./service');
const jwt = require('jsonwebtoken');

module.exports={
    register: async (req,res)=>{
        try{
            if(await userService.isEmailExists(req.body.email)&&await userService.isUsernameExists(req.body.username)){
                res.code(400);
                return{
                    message: 'Username or Email already exists',
                };
            }
            const user= await userService.create(req.body);
            res.code(201).send(user);
            return{
                message: 'User Registration Successful!'
            }
        }
        catch(err){
            res.code(500);
            return{
                err,
            };
        }
    },
    login: async(req,res)=>{
        try{
            const user= await userService.findByUsername(req.body.username);
            if(!user){
                res.code(400);
                return{
                    message: 'Incorrect Username!',
                };
            }
            if(!userService.comparePassword(user.password,req.body.password)){
                res.code(400);
                return{
                    message: 'Incorrect Password!',
                };
            }
            const token=jwt.sign({id: user._id},'Private');
            res.code(200);
            return{
                message: 'Successfuly login!',
                data: {
                    user,
                    token,
                },
            };
        }
        catch(err){
            res.code(500);
            return{
                err,
            };
        }
    },
};