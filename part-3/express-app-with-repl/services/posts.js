const { posts } = require("../data");

// Our post service functions
const getPost = id => posts[id];
const getPosts = (f, t) => Object.values(posts).slice(f, t);
const getPostsByUserId = userId => Object.values(posts).filter(p => p.userId === userId);

module.exports = {
  getPost,
  getPosts,
  getPostsByUserId,
};
