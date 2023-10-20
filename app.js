console.clear();

import dotenv from "dotenv/config";
import chalk from "chalk";
// import { clearLine } from "readline";

import Action from "./action.js";

const command = process.argv[2];
const commands = [
  "list",
  "add",
  "delete",
  "delete-all",
  "edit",
  "export",
  "import",
  "download",
];

const error = chalk.redBright.bold;
const warn = chalk.yellowBright.bold;

if (command) {
  if (command === "list") {
    Action.list();
  } else if (command === "add") {
    Action.add();
  } else if (command === "delete") {
    Action.delete();
  } else if (command === "delete-all") {
    Action.deleteAll();
  } else if (command === "edit") {
    Action.edit();
  } else if (command === "export") {
    Action.export();
  } else if (command === "import") {
    Action.import();
  } else if (command === "download") {
    Action.download();
  } else {
    const message = `${error("Unknown command")}
Available command are:
${warn(commands.join("\n"))}`;
    console.log(message);
  }
}else {
    const message = `${error("You must enter a command.")}
Available command are:
${warn(commands.join("\n"))}`;
    console.log(message);
  }

