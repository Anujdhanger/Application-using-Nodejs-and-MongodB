const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for a Like
const LikeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});

module.exports = mongoose.model("Like", LikeSchema);
