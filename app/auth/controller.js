const userService = require("./service");
const jwt = require("jsonwebtoken");

module.exports = {
  //function to handle user registration
  register: async (req, res) => {
    try {
      if (
        (await userService.isEmailExists(req.body.email)) &&
        (await userService.isUsernameExists(req.body.username))
      ) {
        res.code(400);
        return {
          message: "Username or Email already exists",
        };
      }
      const user = await userService.create(req.body);
      res.code(201).send(user);
      return {
        message: "User Registration Successful!",
      };
    } catch (err) {
      res.code(500);
      return {
        err,
      };
    }
  },
  //function to handle user login
  login: async (req, res) => {
    try {
      const user = await userService.findByUsername(req.body.username);
      if (!user) {
        res.code(400);
        return {
          message: "Incorrect Username!",
        };
      }
      if (!userService.comparePassword(user.password, req.body.password)) {
        res.code(400);
        return {
          message: "Incorrect Password!",
        };
      }
      const token = jwt.sign({ id: user._id }, "Private");
      res.code(200);
      return {
        message: "Successfuly login!",
        data: {
          user,
          token,
        },
      };
    } catch (err) {
      res.code(500);
      return {
        err,
      };
    }
  },
  //function to handle post by user
  post: async (req, res) => {
    try {
      const user = await userService.findByUserID(req.body.userId);
      const post = await userService.createpost(req.body);
      user.posts.push(post._id);
      await user.save();
      res.code(200);
      return {
        message: "Post added successfully",
        data: post,
      };
    } catch (err) {
      res.code(500);
      return {
        err,
      };
    }
  },
  //function to handle comment by user
  comment: async (req, res) => {
    try {
      const user = await userService.findByUserID(req.body.userId);
      const post = await userService.findByPostId(req.body.postId);
      const comment = await userService.createcomment(req.body);
      user.comments.push(comment._id);
      post.comments.push(comment._id);
      await user.save();
      await post.save();
      res.code(200);
      return {
        message: "Comment saved successfully",
        data: comment,
      };
    } catch (err) {
      res.code(500);
      return {
        err,
      };
    }
  },
  //function to handle like by user
  like: async (req, res) => {
    try {
      const user = await userService.findByUserID(req.body.user);
      const post = await userService.findByPostId(req.body.post);
      const like = await userService.createlike(req.body);
      user.likes.push(like._id);
      post.likes.push(like._id);
      await user.save();
      await post.save();
      res.code(200);
      return {
        message: "Post Liked!",
        data: like,
      };
    } catch (err) {
      res.code(500);
      return {
        err,
      };
    }
  },
};
