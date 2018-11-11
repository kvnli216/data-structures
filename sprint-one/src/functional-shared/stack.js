var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};

  extend(someInstance, stackMethods);


  return someInstance;
};

var extend = function(obj, methods) {
	for (var key in methods) {
		obj[key] = methods[key];
	}
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
  		var lastKeyArr = keyArr[keyArr.length - 1];
  		delete this.storage[lastKeyArr];
  		return lastKeyArr;
  	}
  }

};


