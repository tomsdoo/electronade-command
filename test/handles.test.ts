import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles } from "../src/";
import { Command } from "../src/command";

describe("handles", () => {
  it("electronade-command:execute eventName exists", () => {
    assert(
      handles.find(
        ({ eventName }) => eventName === "electronade-command:execute"
      )
    );
  });

  it("electronade-command:execute handler", async () => {
    assert.equal(
      await (
        handles.find(
          ({ eventName }) => eventName === "electronade-command:execute"
        ) as { handler: Function }
      ).handler({}, "ls"),
      await Command.execute("ls")
    );
  });
});
