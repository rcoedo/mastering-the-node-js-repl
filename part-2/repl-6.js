const Repl = require("repl");
const util = require("util");

// Color functions
const colors = { RED: "31", GREEN: "32", YELLOW: "33", BLUE: "34", MAGENTA: "35" };
const colorize = (color, s) => `\x1b[${color}m${s}\x1b[0m`;

// Function that takes an object o1 and returns another function
// that takes an object o2 to extend it with the o1 properties as
// read-only
const extendWith = properties => context => {
  Object.entries(properties).forEach(([k, v]) => {
    Object.defineProperty(context, k, {
      configurable: false,
      enumerable: true,
      value: v,
    });
  });
};

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

extendWith({
  noop: () => {},
  identity: x => x,
  isString: x => typeof x === "string" || x instanceof String,
  timeout: util.promisify(setTimeout),
})(repl.context);

// Listen for the exit event
repl.on("exit", sayBye);
