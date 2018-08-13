// Color functions
const colors = { red: "31", green: "32", yellow: "33", blue: "34", magenta: "35" };
const colorize = (color, s) => `\x1b[${colors[color]}m${s}\x1b[0m`;

// Clears require cache
const clearRequireCache = () => {
  Object.keys(require.cache).forEach(function(key) {
    delete require.cache[key];
  });
};

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

// Function that takes an object o1 with shape { key: command } and
// returns another function that takes the repl and defines the commands
// in it
const defineCommands = commands => repl => {
  Object.entries(commands).forEach(([k, v]) => {
    repl.defineCommand(k, v);
  });
};

module.exports = {
  colorize,
  extendWith,
  defineCommands,
  clearRequireCache,
};
