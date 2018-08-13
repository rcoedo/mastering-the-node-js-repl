const { userService, postService } = require("../services");

const getUser = (req, res) => {
  const user = userService.getUser(req.params.userId);

  return user ? res.send(user) : res.status(404);
};

const getUsers = (req, res) => {
  return res.send(userService.getUsers());
};

const getUserPosts = (req, res) => {
  const user = userService.getUser(req.params.userId);

  if (!user) {
    return res.status(404);
  }

  return res.send(postService.getPostsByUserId(req.params.userId));
};

const getPosts = (req, res) => {
  return res.send(postService.getPosts(0, 10));
};

const getPost = (req, res) => {
  const post = postService.getPost(req.params.postId);

  return post ? res.send(post) : res.status(404);
};

module.exports = {
  getUser,
  getUsers,
  getUserPosts,
  getPosts,
  getPost,
};
