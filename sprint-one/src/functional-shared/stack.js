var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  var size = 0;

	someInstance.size = function(val) {
		size = Object.keys(storage).length;
  	return size;
  };

  someInstance.push = function(val) {
  	storage[val] = val;
  }

  someInstance.pop = function(val) {
  	if (size > 0) {
  		var keyArr = Object.keys(storage);
  		var lastKeyArr = keyArr(keyArr.length - 1);
  		delete storage[lastKeyArr];
  	}
  }

  return someInstance;
};

var stackMethods = {};


