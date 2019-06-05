//DFS could have same implementation as BFS if they are implemented with stacks instead of Queues

//DFS could be easily implemented with recursion as well

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
//Graph emample taken from
//https://medium.com/@adriennetjohnson/a-walkthrough-of-dijkstras-algorithm-in-javascript-e94b74192026
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


// 2.Create a visited Array
let visitedArray =[];

// 3. Make all of them visited false

graphExample.nodeList.map(function(singleNode){
   visitedArray.push[{node:singleNode,visited:false}]
 })

 DFSUtils(startingNode);
 var DFSUtils = function(visitedNode){
  visitedArray[visitedNode].visited = true;
  //get Neighbors pf visitedNodes
  
graphExample.adjacencyList[visitedNode].map(function(singleNode){
//mark them true and then use recursion to get all neighbors of visited neighbors
if(visitedArray[singleNode].visited !== true){
    dfsUtils(singleNode);
    }
})
      
 }
  
 
 }
