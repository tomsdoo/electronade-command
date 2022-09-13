import { exec } from "child_process";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Command {
  public static async execute(commandLine: string): Promise<string | Buffer> {
    return await new Promise((resolve: Function, reject: Function) =>
      exec(commandLine, (err, stdout, stderr) =>
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        (err ? reject : resolve)(err ? stderr : stdout)
      )
    );
  }
}
