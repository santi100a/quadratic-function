# Template for my NPM libraries

Hello, everyone! This is a template repo for my libraries.
You'll find a readme template inside this file.

In order for the CI workflow's publishing jobs to execute successfully, you must have two
Actions secrets set up -- `NPM_AUTH_TOKEN` and `GPR_AUTH_TOKEN`.

You might want to check the [YAML Actions workflow](.github/workflows/ci.yml) for hints
and information you may want or need to know.

## Template features

- License (both template contents and code built from it): MIT.
- Code of conduct: adapted from the Contributor Covenant.
- Package manager: Yarn 1.22.19.
- Automatic testing: Jest.
- TypeScript 4.9.5 for built-in type definitions and support for compiling to ES3.
- ESLint and Prettier.
- Security policy and contribution guidelines.

- Self-made scripts for verification of package.json and creation of an ESM wrapper
  around TypeScript's CommonJS output to allow for usage within both CJS and ESM projects.

## Your todos as a user of this template

- [ ] Change all placeholders all over different files.
- [ ] Fill this README template.

<!-- START README TEMPLATE -->
<!-- 
* Make sure to replace ALL placeholders.
! The readme will be broken otherwise!
-->

<!-- # Library Name -->
<!-- Badges -->
<!-- Example: 
[![Build Status][workflow badge]][repo actions]
[![npm homepage][npm badge]][npm home]
[![GitHub stars][stars badge]][repo url]
[![License][license badge]][repo url]
[![Bundlephobia stats][bundlephobia badge]][bundlephobia url]

[workflow badge]: https://github.com/santi100a/quadratic-function/actions/workflows/ci.yml/badge.svg
[npm badge]: https://img.shields.io/npm/v/@santi100a/quadratic-function
[stars badge]: https://img.shields.io/github/stars/santi100a/quadratic-function.svg
[license badge]: https://img.shields.io/github/license/santi100a/quadratic-function.svg
[bundlephobia badge]: https://img.shields.io/bundlephobia/min/@santi100a/quadratic-function

[npm home]: https://npmjs.org/package/@santi100a/quadratic-function
[repo actions]: https://github.com/santi100a/quadratic-function/actions
[repo url]: https://github.com/santi100a/quadratic-function
[bundlephobia url]: https://bundlephobia.com/package/@santi100a/quadratic-function@latest
-->

<!-- Bullet points -->
<!-- Example:
- 🚀 Lightweight and fast[^](#disclaimers)
- 👴 ES3-compliant[*](#disclaimers)
- 💻 Portable between the browser and Node.js
-->

<!-- ## What's this? -->
<!-- Description -->

<!-- Mentions, inspirations -->

<!-- ## Installation -->
<!-- Installation steps and/or commands -->
<!-- Example:
- Via NPM: `npm install @santi100a/quadratic-function`
- Via Yarn: `yarn add @santi100a/quadratic-function`
- Via PNPM: `pnpm install @santi100a/quadratic-function`
-->

<!-- ## API -->
<!--
* If a class/function/variable is deprecated, you must cross it out by wrapping the 
* `<class/function/variable prototype/definition/type def>;` with tildes, like this:
* ~~`<class/function/variable prototype/definition/type def>;`~~ (deprecated [since <version>])

- `<class/function/variable prototype/definition/type def>;` ([since <version if not first version>]) ([deprecated [since <version>]]) <description>
   | Name       |     Type    | Description        | Optional? | Default                                |
   |------------|-------------|--------------------|-----------|----------------------------------------|
   |<param name>|<param type> |<param description> | <Yes/No>  | <N/A if not optional, else the default>|
- ...
-->

<!-- ## Usage -->
<!-- Usage examples (code snippets) -->
<!-- 
Usage examples go here
* This is a very important step.
```typescript
```
-->
<!-- ## Contribute -->

<!-- Contribution hints and basic instructions -->
<!-- Example:
Wanna contribute? [File an issue](issues) or [pull request](pulls)! 
Look at [the contribution instructions](CONTRIBUTING.md) and make sure you follow the [contribution Code of Conduct](CODE_OF_CONDUCT.md).
-->

<!-- ## Disclaimers -->
<!-- Any disclaimers you may need. -->
<!--
**Hasn't been tested in an actual ES3 environment. Feel free to open an issue or pull request if you find any non-ES3 thing. See "Contribute" for instructions on how to do so.*

*^The source code is just a few kilobytes in size.*
-->