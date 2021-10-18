// import assert from "assert";
import assert from "assert";

// import assert from "chai".assert;
// const assert = require("chai").assert;

import { sayHello } from "../app.js";

describe("App Test suite", function () {
  it("app should return 9", function () {
    assert.equal(sayHello(), 9);
    // assert.deepEqual(sayHello(), "9");
  });
});
