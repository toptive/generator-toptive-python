"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-toptive-python:app by default", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({});
  });

  it("github files are created", () => {
    assert.file([
      ".github/ISSUE_TEMPLATE.md",
      ".github/pull_request_template.md"
    ]);
  });

  it("documentation files are created", () => {
    assert.file([
      "docs/authors.rst",
      "docs/conf.py",
      "docs/contributing.rst",
      "docs/index.rst",
      "docs/installation.rst",
      "docs/make.bat",
      "docs/Makefile",
      "docs/readme.rst",
      "docs/usage.rst"
    ]);
  });

  it("source files are created", () => {
    assert.file([
      "python_boilerplate/__init__.py",
      "python_boilerplate/python_boilerplate.py"
    ]);
  });

  it("requirements files are created", () => {
    assert.file([
      "requirements/dev.txt",
      "requirements/prod.txt",
      "requirements/test.txt"
    ]);
  });

  it("system test files are created", () => {
    assert.file([
      "stests/__init__.py",
      "stests/common_resources.robot",
      "stests/default_suite.robot"
    ]);
  });

  it("unit test files are created", () => {
    assert.file(["utests/__init__.py", "utests/test_python_boilerplate.py"]);
  });

  it("dot files are created", () => {
    assert.file([
      ".bumpversion.cfg",
      ".dockerignore",
      ".editorconfig",
      ".gitignore",
      ".travis.yml"
    ]);
  });

  it("regular files are created", () => {
    assert.file([
      "AUTHORS.rst",
      "CHANGELOG.rst",
      "CONTRIBUTING.rst",
      "Dockerfile",
      "LICENSE.rst",
      "Makefile",
      "MANIFEST.in",
      "README.rst",
      "setup.cfg",
      "setup.py",
      "tox.ini"
    ]);
  });
});
