var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.find = function(target) {
    let currentNode = list.head;

    while (currentNode !== null) {
      if (currentNode.value === target) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return -1;
  };

  list.addToTail = function(value) {
    let newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;   
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      let removedItem = list.head;
    
      list.head = list.head.next;

      return removedItem.value;
    } else {
      return null;
    }
  };

  list.contains = function(target) {
    let isFound = false;
    let currentNode = list.head;

    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return isFound;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail = O(c);
 * removeHead = O(c);
 * contains = O(n);
 */
