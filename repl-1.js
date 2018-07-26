const Repl = require("repl");

// Print the welcome message
console.log(`
  Hello, ${process.env.USER}!
  You're running the Node.js REPL in ${process.cwd()}.
`);

// Start the REPL
Repl.start();
