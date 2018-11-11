var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
	size: function(val) {
		return Object.keys(this.storage).length;
	},

	push: function(val) {
		this.storage[val] = val;
	},

	pop: function(val) {
		if (this.size() > 0) {
			var keyArr = Object.keys(this.storage);
			var lastKey = keyArr[keyArr.length - 1];
			delete this.storage[lastKey];
			return lastKey;
		}
	}

};


