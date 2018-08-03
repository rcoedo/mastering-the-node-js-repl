const Repl = require("repl");
const util = require("util");

// Color functions
const colors = { RED: "31", GREEN: "32", YELLOW: "33", BLUE: "34", MAGENTA: "35" };
const colorize = (color, s) => `\x1b[${color}m${s}\x1b[0m`;

// Some useful stuff
const user = colorize(colors.MAGENTA, process.env.USER);
const cwd = colorize(colors.YELLOW, process.cwd());
const say = message => () => console.log(message);
const sayWelcome = say(`
  Hello, ${user}!
  You're running the Node.js REPL in ${cwd}.
`);
const sayBye = say(`
  Goodbye, ${user}!
`);
const nodeVersion = colorize(colors.GREEN, `${process.title} ${process.version}`);
const prompt = `${nodeVersion} → `;

// Print the welcome message
sayWelcome();

// Start the REPL
const repl = Repl.start({ prompt });

repl.context.noop = () => {};
repl.context.identity = x => x;
repl.context.isString = x => typeof x === "string" || x instanceof String;
repl.context.timeout = util.promisify(setTimeout);

// Listen for the exit event
repl.on("exit", sayBye);
