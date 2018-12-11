"use strict";
var path = require("path");
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the sweet ${chalk.red(
          "generator-toptive-python"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "Your project name",
        default: "python_boilerplate"
      },
      {
        type: "input",
        name: "projectUrl",
        message: "Github project URL",
        default: "https://github.com/toptive/generator-toptive-python.git"
      },
      {
        type: "input",
        name: "projectVersion",
        message: "Project Version",
        default: "0.1.0"
      },
      {
        type: "input",
        name: "projectAuthor",
        message: "Project Author",
        default: "Franco Riberi"
      },
      {
        type: "input",
        name: "authorEmail",
        message: "Email Author",
        default: "fgriberi@gmail.com"
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.destinationRoot(this.props.projectName);

    // Copy .github
    this.fs.copyTpl(
      this.templatePath(".github/ISSUE_TEMPLATE/bug_report.md"),
      this.destinationPath(
        path.join(
          this.destinationRoot(),
          ".github/ISSUE_TEMPLATE/bug_report.md"
        )
      ),
      {
        projectName: this.props.projectName
      }
    );
    this.fs.copyTpl(
      this.templatePath(".github/ISSUE_TEMPLATE/feature_request.md"),
      this.destinationPath(
        path.join(
          this.destinationRoot(),
          ".github/ISSUE_TEMPLATE/feature_request.md"
        )
      )
    );
    this.fs.copyTpl(
      this.templatePath(".github/PULL_REQUEST_TEMPLATE.md"),
      this.destinationPath(
        path.join(this.destinationRoot(), ".github/PULL_REQUEST_TEMPLATE.md")
      ),
      {
        projectName: this.props.projectName
      }
    );

    // Copy docs
    this.fs.copyTpl(
      this.templatePath("docs/authors.rst"),
      this.destinationPath(
        path.join(this.destinationRoot(), "docs/authors.rst")
      )
    );
    this.fs.copyTpl(
      this.templatePath("docs/conf.py"),
      this.destinationPath(path.join(this.destinationRoot(), "docs/conf.py")),
      {
        projectName: this.props.projectName,
        projectAuthor: this.props.projectAuthor,
        projectVersion: this.props.projectVersion
      }
    );
    this.fs.copyTpl(
      this.templatePath("docs/contributing.rst"),
      this.destinationPath(
        path.join(this.destinationRoot(), "docs/contributing.rst")
      )
    );
    this.fs.copyTpl(
      this.templatePath("docs/history.rst"),
      this.destinationPath(
        path.join(this.destinationRoot(), "docs/history.rst")
      )
    );
    this.fs.copyTpl(
      this.templatePath("docs/index.rst"),
      this.destinationPath(path.join(this.destinationRoot(), "docs/index.rst")),
      {
        projectName: this.props.projectName
      }
    );
    this.fs.copyTpl(
      this.templatePath("docs/installation.rst"),
      this.destinationPath(
        path.join(this.destinationRoot(), "docs/installation.rst")
      ),
      {
        projectName: this.props.projectName,
        projectUrl: this.props.projectUrl
      }
    );
    this.fs.copyTpl(
      this.templatePath("docs/make.bat"),
      this.destinationPath(path.join(this.destinationRoot(), "docs/make.bat"))
    );
    this.fs.copyTpl(
      this.templatePath("docs/Makefile"),
      this.destinationPath(path.join(this.destinationRoot(), "docs/Makefile"))
    );
    this.fs.copyTpl(
      this.templatePath("docs/readme.rst"),
      this.destinationPath(path.join(this.destinationRoot(), "docs/readme.rst"))
    );
    this.fs.copyTpl(
      this.templatePath("docs/usage.rst"),
      this.destinationPath(path.join(this.destinationRoot(), "docs/usage.rst"))
    );

    // Copy main module
    this.fs.copyTpl(
      this.templatePath("python_boilerplate/__init__.py"),
      this.destinationPath(
        path.join(
          this.destinationRoot(),
          this.props.projectName + "/__init__.py"
        )
      ),
      {
        projectName: this.props.projectName,
        projectAuthor: this.props.projectAuthor,
        authorEmail: this.props.authorEmail,
        projectVersion: this.props.projectVersion
      }
    );
    this.fs.copyTpl(
      this.templatePath("python_boilerplate/python_boilerplate.py"),
      this.destinationPath(
        path.join(
          this.destinationRoot(),
          this.props.projectName + "/" + this.props.projectName + ".py"
        )
      ),
      {
        projectName: this.props.projectName
      }
    );

    // Copy requirements folder
    this.fs.copyTpl(
      this.templatePath("requirements/dev.txt"),
      this.destinationPath(
        path.join(this.destinationRoot(), "requirements/dev.txt")
      )
    );
    this.fs.copyTpl(
      this.templatePath("requirements/prod.txt"),
      this.destinationPath(
        path.join(this.destinationRoot(), "requirements/prod.txt")
      )
    );
    this.fs.copyTpl(
      this.templatePath("requirements/test.txt"),
      this.destinationPath(
        path.join(this.destinationRoot(), "requirements/test.txt")
      )
    );

    // Copy stests folder
    this.fs.copyTpl(
      this.templatePath("stests/__init__.py"),
      this.destinationPath(
        path.join(this.destinationRoot(), "stests/__init__.py")
      )
    );
    this.fs.copyTpl(
      this.templatePath("stests/common_resources.robot"),
      this.destinationPath(
        path.join(this.destinationRoot(), "stests/common_resources.robot")
      ),
      {
        projectName: this.props.projectName
      }
    );
    this.fs.copyTpl(
      this.templatePath("stests/default_suite.robot"),
      this.destinationPath(
        path.join(this.destinationRoot(), "stests/default_suite.robot")
      )
    );

    // Copy utest folder
    this.fs.copyTpl(
      this.templatePath("utests/__init__.py"),
      this.destinationPath(
        path.join(this.destinationRoot(), "utests/__init__.py")
      )
    );
    this.fs.copyTpl(
      this.templatePath("utests/test_python_boilerplate.py"),
      this.destinationPath(
        path.join(this.destinationRoot(), "utests/test_python_boilerplate.py")
      )
    );

    // Copy dot files
    this.fs.copyTpl(
      this.templatePath(".bumpversion.cfg"),
      this.destinationPath(
        path.join(this.destinationRoot(), ".bumpversion.cfg")
      ),
      {
        projectVersion: this.props.projectVersion,
        projectName: this.props.projectName
      }
    );
    this.fs.copyTpl(
      this.templatePath(".dockerignore"),
      this.destinationPath(path.join(this.destinationRoot(), ".dockerignore"))
    );
    this.fs.copyTpl(
      this.templatePath(".editorconfig"),
      this.destinationPath(path.join(this.destinationRoot(), ".editorconfig"))
    );
    this.fs.copyTpl(
      this.templatePath(".gitignore"),
      this.destinationPath(path.join(this.destinationRoot(), ".gitignore"))
    );
    this.fs.copyTpl(
      this.templatePath(".pylintrc"),
      this.destinationPath(path.join(this.destinationRoot(), ".pylintrc"))
    );
    this.fs.copyTpl(
      this.templatePath(".travis.yml"),
      this.destinationPath(path.join(this.destinationRoot(), ".travis.yml"))
    );

    // Copy regular files
    this.fs.copyTpl(
      this.templatePath("AUTHORS.rst"),
      this.destinationPath(path.join(this.destinationRoot(), "AUTHORS.rst")),
      {
        projectAuthor: this.props.projectAuthor,
        authorEmail: this.props.authorEmail
      }
    );
    this.fs.copyTpl(
      this.templatePath("CHANGELOG.rst"),
      this.destinationPath(path.join(this.destinationRoot(), "CHANGELOG.rst"))
    );
    this.fs.copyTpl(
      this.templatePath("CONTRIBUTING.rst"),
      this.destinationPath(
        path.join(this.destinationRoot(), "CONTRIBUTING.rst")
      ),
      {
        projectUrl: this.props.projectUrl
      }
    );
    this.fs.copyTpl(
      this.templatePath("Dockerfile"),
      this.destinationPath(path.join(this.destinationRoot(), "Dockerfile")),
      {
        projectName: this.props.projectName,
        projectAuthor: this.props.projectAuthor,
        authorEmail: this.props.authorEmail
      }
    );
    this.fs.copyTpl(
      this.templatePath("LICENSE.rst"),
      this.destinationPath(path.join(this.destinationRoot(), "LICENSE.rst")),
      {
        projectAuthor: this.props.projectAuthor
      }
    );
    this.fs.copyTpl(
      this.templatePath("Makefile"),
      this.destinationPath(path.join(this.destinationRoot(), "Makefile")),
      {
        projectName: this.props.projectName
      }
    );
    this.fs.copyTpl(
      this.templatePath("MANIFEST.in"),
      this.destinationPath(path.join(this.destinationRoot(), "MANIFEST.in"))
    );
    this.fs.copyTpl(
      this.templatePath("README.rst"),
      this.destinationPath(path.join(this.destinationRoot(), "README.rst")),
      {
        projectName: this.props.projectName,
        projectUrl: this.props.projectUrl
      }
    );
    this.fs.copyTpl(
      this.templatePath("setup.cfg"),
      this.destinationPath(path.join(this.destinationRoot(), "setup.cfg")),
      {
        projectVersion: this.props.projectVersion
      }
    );
    this.fs.copyTpl(
      this.templatePath("setup.py"),
      this.destinationPath(path.join(this.destinationRoot(), "setup.py")),
      {
        projectName: this.props.projectName,
        projectAuthor: this.props.projectAuthor,
        authorEmail: this.props.authorEmail,
        projectUrl: this.props.projectUrl,
        projectVersion: this.props.projectVersion
      }
    );
    this.fs.copyTpl(
      this.templatePath("tox.ini"),
      this.destinationPath(path.join(this.destinationRoot(), "tox.ini")),
      {
        projectName: this.props.projectName
      }
    );
  }
};
