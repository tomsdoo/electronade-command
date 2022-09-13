import { Command } from "./command";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ipcRenderer } = require("electron");

export const handles = [
  {
    eventName: "electronade-command:execute",
    handler: async (event: any, commandLine: string) => await Command.execute(commandLine),
  },
];

export const preloadObject = {
  command: {
    execute: async (commandLine: string) =>
      await ipcRenderer.invoke("electronade-command:execute", commandLine),
  },
};
