const faker = require("faker");

USER_COUNT = 20;
POST_COUNT = 100;

// We use faker to generate some mock data
const randomUser = id => ({ id, name: faker.name.findName(), email: faker.internet.email() });
const users = [...Array(USER_COUNT).keys()].reduce((acc, id) => ({ ...acc, [id]: randomUser(id) }));

const randomPost = id => ({
  id,
  title: faker.lorem.sentence(),
  body: faker.lorem.paragraphs(),
  userId: Math.floor(Math.random() * Math.floor(users.length)),
});

const posts = [...Array(POST_COUNT).keys()].reduce((acc, id) => ({ ...acc, [id]: randomPost(id) }));

module.exports = {
  users,
  posts,
};
