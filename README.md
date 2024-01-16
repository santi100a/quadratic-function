# Santi's Quadratic Function Toolkit

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

- 🚀 Lightweight and fast
- 👴 ES3-compliant
- 💻 Portable between the browser and Node.js


## What's this?

This is a small library that allows you to calculate things like the vertex or roots of a
quadratic function. Quadratic equations can be solved using the latter.

## Installation

- Via NPM: `npm install @santi100a/quadratic-function`
- Via Yarn: `yarn add @santi100a/quadratic-function`
- Via PNPM: `pnpm install @santi100a/quadratic-function`

## API
- `QuadraticFunction.vertex(): { x: number, y: number };` Returns an object containing the coordinates of the highest or lowest point the function will reach.
- `QuadraticFunction.roots(): [number?, number?];` Calculates the real roots of the `QuadraticFunction`.
- `QuadraticFunction.evaluate(x: number): number;` Evaluates the `QuadraticFunction` at `x`.
   | Name       |     Type    | Description        | Optional? | Default                                |
   |------------|-------------|--------------------|-----------|----------------------------------------|
   |`x`|`number`|The value at which to evaluate the function.|Yes | _N/A_|

## Usage

```typescript
import QuadraticFunction = require('@santi100a/quadratic-function'); // TypeScript
const QuadraticFunction = require('@santi100a/quadratic-function'); // CommonJS
import QuadraticFunction from '@santi100a/quadratic-function'; // ESM

const fn = new QuadraticFunction(1, -1, -1);
fn.evaluate(12); // => 131
fn.evaluate(0); // => -1
fn.vertex(); // => { x: 0.5, y: -1.25 }
fn.roots(); // => [ (1 + sqrt(5)) / 2, (1 - sqrt(5)) / 2 ]
```
## Contribute

Wanna contribute? [File an issue](https://github.com/santi100a/quadratic-function/issues) or [pull request](https://github.com/santi100a/quadratic-function/pulls)! 
Look at [the contribution instructions](CONTRIBUTING.md) and make sure you follow the [contribution Code of Conduct](CODE_OF_CONDUCT.md).
