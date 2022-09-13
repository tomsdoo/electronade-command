import { exec } from "child_process";

export class Command {
  public static async execute(commandLine: string) {
    return new Promise((resolve: Function, reject: Function) =>
      exec(commandLine, (err, stdout, stderr) =>
        (err ? reject : resolve)(err ? stderr : stdout)
      )
    );
  }
}
