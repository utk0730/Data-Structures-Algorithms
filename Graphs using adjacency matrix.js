class graphs{
    constructor(){
        this.nodes = []
        this.adjacencyMatrix = []
    }
    addNode(v){
        this.nodes.push(v)
        //this.adjacencyMatrix.push([])

    }
    createMatrix(){
        
        this.adjacencyMatrix = []
        let len = this.nodes.length
        for(let i=0;i<len;i++){
            this.adjacencyMatrix.push(new Array(len).fill(0))
        }
        
    }
    addEdge(v1,v2){
        if(this.adjacencyMatrix.length ==0 ) this.createMatrix();
        this.adjacencyMatrix[v1][v2] = 1
        
    }
}
let g = new graphs()
g.addNode(0)
g.addNode(1)
g.addNode(2)
g.addNode(3)

// g.addEdge(1,2)
// g.addEdge(1,3)
// g.addEdge(2,1)
// g.addEdge(2,3)
// g.addEdge(3,1)
// g.addEdge(3,2)