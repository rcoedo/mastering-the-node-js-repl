const express = require("express");
const controllers = require("./controllers");
const repl = require("./repl");

const app = express();

app.get("/users", controllers.getUsers);
app.get("/users/:userId", controllers.getUser);
app.get("/users/:userId/posts", controllers.getUserPosts);

app.get("/posts", controllers.getPosts);
app.get("/posts/:postId", controllers.getPost);

app.listen(3000, () => console.log("express server listening on port 3000"));
repl.listen(3001, () => console.log("repl server listening on port 3001"));
