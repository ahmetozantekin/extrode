'use strict';

module.exports = function (array, keys) {
    return array.map(function (obj) {
        var newObj = Object.create(null);
        for (var key in obj){
            if(keys.indexOf(key) != -1){
                newObj[key] = obj[key];
            }
        }
        return newObj;
    })
};