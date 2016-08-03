'use strict';

module.exports = function (object, keys) {

    var typeOfObject = Object.prototype.toString.call(object);

    // Check the object whether is array or not
    if (typeOfObject === '[object Array]') {
        return object.map(function (item) {
            return buildSingleObject(item, keys);
        });
    }
    else if(typeOfObject === '[object Object]'){
        return buildSingleObject(object, keys);
    }
    else {
        throw 'Type of first parameter must be "array" or "object"';
    }

    function buildSingleObject(obj, keys){
        var newObject = Object.create(null);
        for (var key in obj){
            if(keys.indexOf(key) != -1){
                newObject[key] = obj[key];
            }
        }
        return newObject;
    }
};