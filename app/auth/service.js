const User = require("../Users/user");
const bcrypt = require("bcrypt");
const Post = require("../models/post");
const Comment = require("../models/comment");
const Like = require("../models/like");

//Helping functions
module.exports = {
  findByemail: async (email) => {
    return await User.findOne({ email });
  },
  findByUserID: async (userID) => {
    return await User.findById(userID);
  },
  findByUsername: async (username) => {
    return await User.findOne({ username });
  },
  findByPostId: async (PostId) => {
    return await Post.findById(PostId);
  },
  create: async (data) => {
    data.password = bcrypt.hashSync(data.password, 10);
    return await User.create(data);
  },
  isUsernameExists: async (username) => {
    return await User.exists({ username });
  },
  isEmailExists: async (email) => {
    return await User.exists({ email });
  },
  comparePassword: async (userPassword, password) => {
    const isCompared = bcrypt.compareSync(userPassword, password);
    return isCompared;
  },
  createpost: async (data) => {
    return await Post.create(data);
  },
  createcomment: async (data) => {
    return await Comment.create(data);
  },
  createlike: async (data) => {
    return await Like.create(data);
  },
};
