# Vortex CORE Layout Editor

This project is a fork of [TsFreddie Much Programming Core project](https://github.com/TsFreddie/much-programming-core).

My intent is to do some refactoring, upgrade the sources, move to the latest version of the [VueJS Framework](https://vuejs.org/), add tests, and a decent development environment.

# Installation

```sh
npm ci
```

# End to End Testing

The project uses Parcel and Cypress to run the e2e tests suite.

This script runs the project with Parcel on **port 1235**, and let Cypress do its job:

```sh
npm run test:e2e
```

# Short Term Roadmap

- [x] documentation cleaning
- [x] project initialization using npm
- [ ] setup the testing environment
    - [x] install Cypress
    - [x] install Parcel
    - [x] e2e test: main page content
    - [x] automation
    - [x] e2e test: save the default layout as json
    - [ ] e2e test: export the default layout as binary
- [ ] CI and git hooks
- [ ] implement the [TCR](https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864) coding workflow
- [x] import the css files
- [ ] import the script files
- [ ] reduce the _js/muchpc.js_ file complexity
    - [ ] move the constants to dedicated files
    - [ ] move the methods to dedicated files
- [ ] unit test - json generation
- [ ] unit test - binary generation
- [ ] formating
    - [ ] eslint
    - [ ] typescript
