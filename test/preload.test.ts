import { describe, it } from "mocha";
import { strict as assert } from "assert";
import { mock } from "sinon";

import { preloadObject } from "../src/";

const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: async (eventName: string, ...args: any[]) => await Promise.resolve(eventName),
};

describe("preloadObject", () => {
  it("preloadObject.command exists", () => {
    assert(preloadObject.command);
  });

  it("preloadObject.command.execute exists", () => {
    assert(preloadObject.command.execute);
  });

  it("preloadObject.command.execute calling", async () => {
    const commandLine = "ls ../";
    const mockedValue = "mocked value";
    const mocked = mock(ipcRenderer);
    mocked
      .expects("invoke")
      .once()
      .withArgs("electronade-command:execute", commandLine)
      .returns(Promise.resolve(mockedValue));

    assert.equal(
      // eslint-disable-next-line no-eval
      await eval(preloadObject.command.execute.toString())(commandLine),
      mockedValue
    );

    mocked.verify();
    mocked.restore();
  });
});
