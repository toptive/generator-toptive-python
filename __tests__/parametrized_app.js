"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

const PROJECT_NAME = "fake_project";

describe("generator-toptive-python:app by default", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      projectName: PROJECT_NAME,
      projectUrl: "www.google.com",
      projectVersion: "0.0.1",
      projectAuthor: "Fake Author",
      authorEmail: "fakeauthor@gmail.com"
    });
  });

  it("source files are created with the expected name", () => {
    assert.file([
      PROJECT_NAME + "/__init__.py",
      PROJECT_NAME + "/" + PROJECT_NAME + ".py"
    ]);
  });
});
