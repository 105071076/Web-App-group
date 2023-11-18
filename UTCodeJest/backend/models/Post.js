const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  file: String,
  userEmail: String,
  // other fields as necessary
});

const Post = mongoose.model("posts", postSchema);
module.exports = Post;
