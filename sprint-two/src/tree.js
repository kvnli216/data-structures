var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  extend(newTree, treeMethods);

  return newTree;
};

let extend = function(obj, source) {
  for (let key in source) {
    obj[key] = source[key];
  }

  return obj;
};

let treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.getSize = function() {
  let counter = 1;

  if (this.children.length === 0) {
    return counter;
  }

  this.children.forEach(child => {
    counter += child.getSize();
  });

  return counter;
};

treeMethods.contains = function(target) {
  let wasFound = false;

  if (this.value === target) {
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      wasFound = this.children[i].contains(target);
      if (wasFound) {
        return true;
      }
    }
  }

  return wasFound;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild = O(c)
 * contains = O(n)
 * 
 */
