

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.hasDoubleStorageSizeRun = false;
  this.hasHalfStorageSizeRun = false;
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuple = [k, v];
  let bucket = this._storage.get(index);

  if (bucket === undefined) {
    bucket = [];
  }

  bucket.push(tuple);
  this._storage.set(index, bucket);

  this.resize();
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  let targetValue = undefined;

  if (bucket === undefined) {
    return undefined;
  }

  bucket.forEach(tuple => {
    if (tuple[0] === k) {
      targetValue = tuple[1];
    }
  });

  return targetValue;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);

  if (bucket === undefined) {
    return undefined;
  }

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      break;
    }
  }

  if (bucket.length === 0) {
    this._storage.set(index, undefined);
  }

  this.resize();
};

HashTable.prototype.getSize = function () {
  let counter = 0;

  this._storage.each(bucket => {
    if (bucket !== undefined) {
      counter += bucket.length;
    }
  });

  return counter;
};

HashTable.prototype.resize = function () {
  let resize = false;
  let counter = 0;

  this._storage.each(bucket => {
    if (bucket !== undefined) {
      counter++;
    }
  });

  // check threshholds
  if (counter > this._limit * .75) {
    this.doubleStorageSize();
  } else if (counter < this._limit * .25) {
    this.halfStorageSize();
  }
};

HashTable.prototype.doubleStorageSize = function () {
  this._limit *= 2;
  let savedNodes = [];

  this._storage.each(bucket => {
    if (bucket) {
      bucket.forEach(tuple => savedNodes.push(tuple));
    }
  });

  this._storage = LimitedArray(this._limit);

  let thisHash = this;
  savedNodes.forEach(tuple => thisHash.insert(...tuple));
};

HashTable.prototype.halfStorageSize = function () {
  this.hasHalfStorageSizeRun = true;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * retrieve: O(n)
 * remove: O(n)
 */
