var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};

  return someInstance;

};

var queueMethods = {
	size: function() {
		return Object.keys(this.storage).length;
	},
	
	enqueue: function(val) {
		this.storage[val] = val;
	},

	dequeue: function(val) {
		if (this.size() > 0) {
			let keyArr = Object.keys(this.storage);
			let firstKey = keyArr[0];
			delete this.storage[firstKey];	
			return firstKey;
		}
	}

};


