var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.size = function() {
	return Object.keys(this.storage).length;
},

Queue.prototype.enqueue = function(val) {
	this.storage[val] = val;
},

Queue.prototype.dequeue = function(val) {
	if (this.size() > 0) {
		let keyArr = Object.keys(this.storage);
		let firstKey = keyArr[0];
		delete this.storage[firstKey];	
		return firstKey;
	}
}