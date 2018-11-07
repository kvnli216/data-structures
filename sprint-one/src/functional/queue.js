var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[value] = value;
  };

  someInstance.dequeue = function() {
    let keyArr = Object.keys(storage);
    let firstKeyArr = keyArr[0];
    delete storage[firstKeyArr];
    return firstKeyArr;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
