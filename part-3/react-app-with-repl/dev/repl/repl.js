import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const Repl = require("repl");
const util = require("util");
const { shallow, render } = require("enzyme");
import { Button } from "../../src/components/buttons";
const { extendWith, colorize, defineCommands, clearRequireCache } = require("./utils");
const { sayWelcome, sayBye, sayDoc, prompt } = require("./cli");

// Define a context initializer
const initializeContext = context => {
  clearRequireCache();

  extendWith({
    shallow,
    render,
    p: e => render(e).toString(),
    Button,
    components: require("../../src/components"),
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
