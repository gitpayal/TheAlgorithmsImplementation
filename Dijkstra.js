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

let map = new Graph();

map.addNode("Fullstack");
map.addNode("Starbucks");
map.addNode("Dig Inn");
map.addNode("Cafe Grumpy");
map.addNode("Insomania Cookies");
map.addNode("Dubliner");

map.addEdge("Fullstack", "Starbucks", 6);
map.addEdge("Fullstack", "Dig Inn", 7);
map.addEdge("Fullstack", "Dubliner", 2);

map.addEdge("Dubliner", "Fullstack", 2);
map.addEdge("Dubliner", "Starbucks", 3);
map.addEdge("Dubliner", "Dig Inn", 4);
map.addEdge("Dubliner", "Insomania Cookies", 7);

map.addEdge("Starbucks", "Dubliner", 3);
map.addEdge("Starbucks", "Fullstack", 6);
map.addEdge("Starbucks", "Insomania Cookies", 6);

map.addEdge("Insomania Cookies", "Starbucks", 6);
map.addEdge("Insomania Cookies", "Dubliner", 7);
map.addEdge("Insomania Cookies", "Cafe Grumpy", 5);

map.addEdge("Cafe Grumpy", "Insomania Cookies", 5);
map.addEdge("Cafe Grumpy", "Dig Inn", 9);


map.addEdge("Dig Inn", "Fullstack", 7);
map.addEdge("Dig Inn", "Dubliner", 4);
map.addEdge("Dig Inn", "Cafe Grumpy", 9);


class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  enqueue(element)
  {
  if(this.collection.length ==0){
      this.collection.push(element)
  } else {
      for(let i=0;i<this.collection.length;i++){
          let added = false;
          if(this.collection[i][1] > element[1]){
              this.collection.splice(i,0,element);
              added = true;

          } 
          if(!added){
             this.collection.push(element);
          }
      }
  }
  }
  
  dequeue(){
      return  this.collection.shift();
      
  }
  isEmpty(){
      return this.collection.length ==0;
  }
  
      
  }

console.log(map)

let startNode = "Fullstack", 
    endNode = "Starbucks";

let times = {};
let backtrace = {};
let pq = new PriorityQueue();
  
  // set all distances except start node is infinity
  
 map.nodeList.map(function(singleNode){
     if(singleNode == startNode){
         times[singleNode] =0
     } else {
            times[singleNode] =Infinity
     }
 }) 
 
 // 
 console.log(times)
 //push start node inside priority queue
 
  pq.enqueue([startNode, 0]);
  
    while (!pq.isEmpty()) {
    let shortestStep = pq.dequeue();
    let currentNode = shortestStep[0];

   map.adjacencyList[currentNode].map(function(neighbor){
       while(neighbor !== endNode){
       let shortest = times[startNode] + neighbor.weight;
        if (shortest < times[neighbor.node]) {
        times[neighbor.node] = time;
        backtrace[neighbor.node] = currentNode;
        pq.enqueue([neighbor.node, time]);
        }
      }
   })
   
   
    }
    
     console.log("times",times)
     console.log("backtrace",backtrace)
    
    
  
 
  
  

