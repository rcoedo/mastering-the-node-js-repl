const Repl = require("repl");
const { extendWith, colorize, defineCommands, clearRequireCache } = require("./utils");
const { sayWelcome, sayBye, sayDoc, prompt } = require("./cli");

// Define a context initializer
const initializeContext = context => {
  clearRequireCache();

  extendWith({
    R: require("ramda"),
    services: require("../../services"),
  })(context);
};

sayWelcome();

const repl = Repl.start({ prompt });

defineCommands({
  doc: {
    help: "Get information about the loaded modules",
    action() {
      this.clearBufferedCommand();
      sayDoc();
      this.displayPrompt();
    },
  },
})(repl);

initializeContext(repl.context);

repl.on("reset", initializeContext);
repl.on("exit", sayBye);
