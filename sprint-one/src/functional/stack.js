var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    storage[value] = value;
  };

  someInstance.pop = function() {
    let keyArr = Object.keys(storage);
    let lastKeyArr = keyArr[keyArr.length - 1];
    delete storage[lastKeyArr];
    return lastKeyArr;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;

  };

  return someInstance;
};
