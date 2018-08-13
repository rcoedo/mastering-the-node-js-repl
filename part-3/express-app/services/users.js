const { users } = require("../data");

// Our user service functions
const getUser = id => users[id];
const getUsers = () => {
  console.log("frus");
  return Object.values(users);
};

module.exports = {
  getUser,
  getUsers,
};
