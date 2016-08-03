'use strict';

var expect = require('chai').expect;
var extrode = require('../extrode');

describe('#extrode', function(){

    it('should extract keys from object array', function(){
        var array = [
            { x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6}
        ];

        var keys = ['x'];

        var result = extrode(array, keys);

        // TODO: Add expectation to here
    });

});