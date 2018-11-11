

// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i] === node) {
      return true;
    }
  }
  
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { 
  let nodeIndex = this.vertices.indexOf(node);

  if (nodeIndex > -1) {
    this.vertices.splice(nodeIndex, 1);
  }

  for (let i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === node || this.edges[i][1]) {
      this.edges.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode) {
      return true;
    } else if (this.edges[i][0] === toNode && this.edges[i][1] === fromNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  let edge = [fromNode, toNode];
  this.edges.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let targetEdge = JSON.stringify([fromNode, toNode]);
  for (let i = 0; i < this.edges.length; i++) {
    if (JSON.stringify(this.edges[i]) === targetEdge) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.vertices.forEach(vertex => cb(vertex));
};

Graph.prototype.getNumberOfVertices = function() {
  return this.vertices.length;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode = O(c)
 * contains = O(n)
 * removeNode = O(n)
 * addEdge = O(c)
 * hasEdge = O(n)
 * removeEdge = O(n)
 * forEachNode = O(n)
 */


