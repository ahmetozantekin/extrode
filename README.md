extrode
=======

A small library that extracts specified keys from objects in an object array

## Installation

  `npm install extrode`

## Usage

    var extrode = require('extrode');
    var dirtyArr = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6}];
    
    var result = extrode(dirtyArr, ['x']);
  
  
  Output should be `[{ x: 1 }, { x: 3 }, { x: 5 }]`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.