class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }
  size() {
  	return Object.keys(this.storage).length;
  }
  push(val) {
  	this.storage[val] = val;
  }
  pop(val) {
  	let keyArr = Object.keys(this.storage);
  	let lastKey = keyArr[keyArr.length - 1];
  	delete this.storage[lastKey];
  	return lastKey;
  }
}