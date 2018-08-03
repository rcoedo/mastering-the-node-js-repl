const Repl = require("repl");

global.noop = () => {};
global.identity = x => x;
global.isString = x => typeof x === "string" || x instanceof String;

const repl = Repl.start({ useGlobal: true });
