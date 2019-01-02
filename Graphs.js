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
}
let g = new Graphs()

g.addVertex('Munich')
g.addVertex('Berlin')
g.addVertex('Frankfurt')
g.addVertex('Stuggart')
g.addVertex('Hamburg')
g.addVertex('Dortmund')

g.addEdge('Berlin','Munich')
g.addEdge('Berlin','Frankfurt')
g.addEdge('Frankfurt','Munich')