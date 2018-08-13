const { colorize } = require("./utils");

const user = colorize("magenta", process.env.USER);

const cwd = colorize("yellow", process.cwd());

const nodeVersion = colorize("green", `${process.title} ${process.version}`);

const say = message => socket => {
  if (socket) {
    socket.write(`${message}\n`);
  }
};

const sayDoc = say(`
  The context has the following modules available:

    * ${colorize("green", "R")}: The ramda library
    * ${colorize("green", "services")}: The application's service layer
`);

const sayWelcome = say(`
  Hello, ${user}!
  You're running the Node.js REPL in ${cwd}
`);

const sayBye = say(`
  Goodbye, ${user}!
`);

const prompt = `${nodeVersion} → `;

module.exports = {
  sayWelcome,
  sayBye,
  sayDoc,
  prompt,
};
