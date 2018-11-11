var BinarySearchTree = function (value) {
  let newBSTree = Object.create(bsTreeMethods);

  newBSTree.value = value;
  newBSTree.left = undefined;
  newBSTree.right = undefined;

  return newBSTree;
};

let bsTreeMethods = {};

bsTreeMethods.insert = function (val) {
  let newNode = val;

  if (newNode.value === undefined) {
    newNode = BinarySearchTree(val);
  }

  if (this.left === undefined && newNode.value < this.value) {
    this.left = newNode;
  } else if (this.left && newNode.value < this.value) {
    this.left.insert(newNode);
  } else if (this.right === undefined && newNode.value > this.value) {
    this.right = newNode;
  } else if (this.right && newNode.value > this.value) {
    this.right.insert(newNode);
  }
};

bsTreeMethods.getSize = function () {
  let counter = 1;

  if (this.left) {
    counter += this.left.getSize();
  }

  if (this.right) {
    counter += this.right.getSize();
  }

  return counter;
};

bsTreeMethods.contains = function (val) {
  if (this.value === val) {
    return true;
  }

  if (this.left === undefined && val < this.value) {
    return false;
  } else if (this.left && val < this.value) {
    return this.left.contains(val);
  } else if (this.right === undefined && val > this.value) {
    return false;
  } else if (this.right && val > this.value) {
    return this.right.contains(val);
  }
};

bsTreeMethods.depthFirstLog = function (cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * contains O(n)
 * depthfirstlog O(n)
 */
