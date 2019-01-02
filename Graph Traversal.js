/*
Graph Traversal uses
--------------------
1> shortes path problems - solving maze,GPS, AI to win the game
2>  recommendations - fb friends recommendations,netflix movie recommendations
3> web crawlers
*/

// DFS traversal of graph
class Graphs{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(v){
        if(!this.adjacencyList[v]){
            this.adjacencyList[v] = []
        }
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(x=> x!== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(x=> x!== v1)
    }
    removeVertex(v){
        while(this.adjacencyList[v].length){
            let adjacentVertex = this.adjacencyList[v].pop()
            this.removeEdge(v,adjacentVertex)
        }
        delete this.adjacencyList[v]
    }
    dfsRecursive(start){
        let visited = {};
        let result= [];
       

       const dfs = (v) => {
            if(!v) return null;
            visited[v] = true;
            result.push(v);
            this.adjacencyList[v].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        }
       (dfs)(start);
        return result

    }
    dfsIterative(start){
        let stack = [start]
        let result = []
        let visited = {}
        visited[start] = true
        while(stack.length){
            let popped = stack.pop()
            result.push(popped)
            this.adjacencyList[popped].forEach(neighbor => {
                if(!visited[neighbor]){
                    stack.push(neighbor)
                    visited[neighbor] = true
                 }
            })
        }
       return result
    }
    bfsGraph(start){
        let visited={}
        visited[start] = true
        let result = []
        let queue = [start]
        while(queue.length){
            let currentVertex = queue.shift()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    queue.push(neighbor)
                    visited[neighbor] = true
                    
                }
            })
        }
        return result
    }
}
let g = new Graphs()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A','B')          //          A
g.addEdge('A','C')          //        /   \    
g.addEdge('B','D')          //       B     C 
g.addEdge('C','E')          //       |     |   
g.addEdge('D','E')          //       D ___ E
g.addEdge('D','F')          //        \   / 
g.addEdge('E','F')          //          F