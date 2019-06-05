import Queue from '../Queue/queue.js'

//create A graph first
class Graph {
    constructor() {
        this.nodeList =[];
        this.adjacencyList ={}
    }
    
    addNode(node) {
    this.nodeList.push(node); 
    this.adjacencyList[node] = [];
    }
    
    addEdge(node1,node2,weight) {
    this.adjacencyList[node1].push({node :node1,weight:weight});
    this.adjacencyList[node2].push({node :node2,weight:weight});
  }
  
}

let graphExample = new Graph();

graphExample.addNode("Fullstack");
graphExample.addNode("Starbucks");
graphExample.addNode("Dig Inn");
graphExample.addNode("Cafe Grumpy");
graphExample.addNode("Insomania Cookies");
graphExample.addNode("Dubliner");

graphExample.addEdge("Fullstack", "Starbucks", 6);
graphExample.addEdge("Fullstack", "Dig Inn", 7);
graphExample.addEdge("Fullstack", "Dubliner", 2);

graphExample.addEdge("Dubliner", "Fullstack", 2);
graphExample.addEdge("Dubliner", "Starbucks", 3);
graphExample.addEdge("Dubliner", "Dig Inn", 4);
graphExample.addEdge("Dubliner", "Insomania Cookies", 7);

graphExample.addEdge("Starbucks", "Dubliner", 3);
graphExample.addEdge("Starbucks", "Fullstack", 6);
graphExample.addEdge("Starbucks", "Insomania Cookies", 6);

graphExample.addEdge("Insomania Cookies", "Starbucks", 6);
graphExample.addEdge("Insomania Cookies", "Dubliner", 7);
graphExample.addEdge("Insomania Cookies", "Cafe Grumpy", 5);

graphExample.addEdge("Cafe Grumpy", "Insomania Cookies", 5);
graphExample.addEdge("Cafe Grumpy", "Dig Inn", 9);

graphExample.addEdge("Dig Inn", "Fullstack", 7);
graphExample.addEdge("Dig Inn", "Dubliner", 4);
graphExample.addEdge("Dig Inn", "Cafe Grumpy", 9);

// 1.BFS always needs a starting node

let startingNode = "Cafe Grumpy";

let Graph = 

// 2.Create a visited Array
let visitedArray =[];
 
// 3. Loop through all nodes and then mark all of then as false;
 
 graphExample.nodeList.map(function(singleNode){
   visitedArray.push[{node:singleNode,visited:false}]
 })
 
 //4. Create queue object 
 
 var q = new Queue(); 
 
 //5. Add starting node in visited Array
 visitedArray.push(startingNode)
 
 //6. push it inside queue
 
q.enqueue(startingNode)
 
 while(!q.isEmpty()){
 
 let currentNode =  q.dequeue(startingNode);
 graphExample.adjacencyList.map(function(neighborNode){
 q.enqueue(neighborNode);
 
 })
 
 }
 
 
 
 
 
 
