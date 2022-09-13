import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles, preloadObject } from "../src/";

const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: (eventName: string) => Promise.resolve(eventName),
};

const handleDictionary = Object.fromEntries(
  handles.map(({ eventName, handler }) => [eventName, handler])
);

describe("preloadObject to handles", () => {
  it("preloadObject.command.execcute()", async () => {
    assert(
      (await eval(preloadObject.command.execute.toString())("dummyCommand")) in
        handleDictionary
    );
  });
});
