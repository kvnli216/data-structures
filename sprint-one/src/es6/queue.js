class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }
  size() {
  	return Object.keys(this.storage).length;
  }
  enqueue(val) {
  	this.storage[val] = val;
  }
  dequeue(val) {
  	if (this.size() > 0) {
  		let keyArr = Object.keys(this.storage);
  		let firstKey = keyArr[0];
  		delete this.storage[firstKey];
  		return firstKey;
  	}
  }
}
