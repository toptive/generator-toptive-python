# generator-toptive-python [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Pyup dependency][pyup-image]][pyup-url] [![Documentation][docs-image]][docs-url] [![Github - Last tag][tag-image]][tag-url]
> Toptive yeoman generator for python projects

## Getting Started

`generator-toptive-python` is a [yeoman-generator](https://yeoman.io/generators/) for python projects using setuptools. The generator creates a boilerplate code that support:

* a standard `setup.py`, `setup.cfg`, `MANIFEST.in`,
* project automation using `tox`,
* static code analysis and reports using `pylint` and `flake8`,
* unit test cases using `pytest`,
* system test cases using `robotframework`,
* documentation with `sphinx`,
* `.bumpversion` script,
* `.gitignore`, `.gitattributes` and `.travis.yml`,
* template for github issues and report bugs,
* a docker image

### What's Yeoman?
[Yeoman](https://yeoman.io/) is a generic scaffolding system allowing the creation of any kind of app. It allows for rapidly getting started on new projects and streamlines the maintenance of existing projects.

### Installation

First, install [Yeoman](http://yeoman.io) and generator-toptive-python using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-toptive-python
```

Then generate your new project:

```bash
yo toptive-python
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Franco Riberi](https://fgriberi.github.io/)

## Credits

This package was generated using [Yeoman](https://yeoman.io/learning/) project and it was inspired in [Cookiecutter](https://github.com/audreyr/cookiecutter) project.


[npm-image]: https://badge.fury.io/js/generator-toptive-python.svg
[npm-url]: https://npmjs.org/package/generator-toptive-python
[travis-image]: https://travis-ci.org/toptive/generator-toptive-python.svg?branch=master
[travis-url]: https://travis-ci.org/toptive/generator-toptive-python
[pyup-image]: https://pyup.io/repos/github/toptive/generator-toptive-python/shield.svg?t=1544125350091
[pyup-url]: https://pyup.io/account/repos/github/toptive/generator-toptive-python/
[docs-image]: https://readthedocs.org/projects/generator-toptive-python/badge/?version=latest
[docs-url]: https://generator-toptive-python.readthedocs.io/en/latest/?badge=latest
[tag-image]: https://img.shields.io/github/tag/expressjs/express.svg
[tag-url]: https://github.com/toptive/generator-toptive-python/tags
