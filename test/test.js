'use strict';

var expect = require('chai').expect;
var extrode = require('../extrode');

describe('#extrode', function(){

    it('should extract keys from object array', function(){
        var array = [
            { x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6}
        ];

        var result = extrode(array, ['x']);

        expect(result[0]).to.have.all.keys('x');

    });

    it('should extract keys from a single object', function(){
        var obj = { x: 1, y: 2 };
        var result = extrode(obj, ['x']);

        expect(result).to.have.all.keys('x');
    });

    it('first given parameter must be an array or object', function(){
        try {
            extrode('dummy', ['x']);
        }
        catch(err) {
            expect(err).to.eql('Type of first parameter must be "array" or "object"');
        }
    });

});