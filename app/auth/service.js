const User = require('../Users/user');
const bcrypt = require('bcrypt');

module.exports = {
    findByemail: async (email)=>{
        return await User.findOne({email});
    },
    findByUserID: async (userID)=>{
        return await User.findById(userID);
    },
    findByUsername: async (username)=>{
        return await User.findOne({username});
    },
    create: async (data)=>{
        data.password= bcrypt.hashSync(data.password,10);
        return await User.create(data);
    },
    isUsernameExists: async(username)=>{
        return await User.exists({username});
    },
    isEmailExists: async (email)=>{
        return await User.exists({email});
    },
    comparePassword: async(userPassword,password)=>{
        const isCompared= bcrypt.compareSync(userPassword,password);
        return isCompared;
    }
};