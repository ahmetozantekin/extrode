'use strict';

module.exports = function (object, keys) {

	// Check the object whether is array or not
	if (object.constructor === Array) {
		return object.map(function (item) {
			return extractKeys(item, keys);
		});
	}
	else if(object.constructor === Object){
		return extractKeys(object, keys);
	}
	else {
		throw 'Type of first parameter must be "array" or "object"';
	}

	function extractKeys(obj, keys){
		var newObj = Object.create(null);
		for (var key in obj){
			if(keys.indexOf(key) != -1){
				newObj[key] = obj[key];
			}
		}
		return newObj;
	}
};