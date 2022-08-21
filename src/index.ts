import { Command } from "./command";
const { ipcRenderer } = require("electron");

export const handles = [
  {
    eventName: "electronade-command:execute",
    handler: (event: any, commandLine: string) =>
      Command.execute(commandLine)
  }
];

export const preloadObject = {
  command: {
    execute: (commandLine: string) =>
      ipcRenderer.invoke("electronade-command:execute", commandLine)
  }
};
