module.exports = 
	Object.prototype.extrode = 
	Array.prototype.extrode = function(keys) {

		if(this instanceof Array) {
			return this.map(item => extractKeys(item, keys));
		}

		return extractKeys(this, keys);

		function extractKeys(object, keys) {
			
			let newObject = {};

			for(let key in object) {
				if(keys.includes(key)) {
					newObject[key] = object[key];
				}
			}

			return newObject;
		}
}