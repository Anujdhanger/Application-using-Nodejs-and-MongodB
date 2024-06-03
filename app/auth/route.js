const fastify = require("fastify");
const userController = require("./controller");

//different routes for different functionalities
module.exports = async (fastify, _opts) => {
  fastify.post("/register", userController.register);
  fastify.post("/login", userController.login);
  fastify.post("/post", userController.post);
  fastify.post("/comment", userController.comment);
  fastify.post("/like", userController.like);
};
