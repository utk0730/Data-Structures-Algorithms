class WeightedGraphs{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(v){
        if(!this.adjacencyList[v]){
            this.adjacencyList[v] = []
        }
    }
    addEdge(v1,v2,weight){
        this.adjacencyList[v1].push({node:v2,weight})
        this.adjacencyList[v2].push({node:v1,weight})
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
    
}

var g = new WeightedGraphs()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A','C',2)
g.addEdge('A','B',4)
g.addEdge('B','E',3)
g.addEdge('C','D',2)
g.addEdge('C','F',4)
g.addEdge('D','F',1)
g.addEdge('D','E',3)
g.addEdge('E','F',1)