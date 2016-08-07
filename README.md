extrode
=======
[![Build Status](https://travis-ci.org/okan/extrode.svg?branch=master)](https://travis-ci.org/okan/extrode) [![Coverage Status](https://coveralls.io/repos/github/okan/extrode/badge.svg?branch=master)](https://coveralls.io/github/okan/extrode?branch=master) [![npm version](https://badge.fury.io/js/extrode.svg)](https://badge.fury.io/js/extrode)

A small library that extracts specified keys from a single object or objects in an array.

## Installation

  `npm install extrode`

## Usage

- Example usage for object arrays:

```javascript
var extrode = require('extrode');
var dirtyArray = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6}];

var result = extrode(dirtyArray, ['x']);
```
  
  Output should be `[{ x: 1 }, { x: 3 }, { x: 5 }]`
  
- Example usage for a single object:
  
```javascript
var extrode = require('extrode');
var dirtyObject = { x: 1, y: 2 };

var result = extrode(dirtyObject, ['x']);
```
  
  Output should be `{ x: 1 }`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
