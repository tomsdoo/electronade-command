import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { Command } from "../src/command";
import { execSync } from "child_process";

describe("Command class", () => {
  it("execute()", async () => {
    assert.equal(
      await Command.execute("ls"),
      execSync("ls", { encoding: "utf8" })
    );
  });
});
