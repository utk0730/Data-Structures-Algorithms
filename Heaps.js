class MaxBinaryHeap{
    constructor(){
        this.values = []
    }
    insert(val){
        this.values.push(val)
        if(this.values.length == 1) {
            return this
        }
        let idx = this.values.length -1
        while(idx > 0){
            let parentIndex = Math.floor((idx-1)/2)
            let parentElement = this.values[parentIndex]
            if(val <= parentElement) return
            this.values[parentIndex] = val
            this.values[idx] = parentElement
            idx = parentIndex
            
        }
    }
    extractMax(){
        if(this.values.length == 0) return null
        if(this.values.length == 1) return 'only one item in Heap,that is max, and cant be deleted'

        // storing first element to return in the end,
        // as this is max Element in heap
        let maxElement = this.values[0] 
        
        //replacing root node value with last element is array
       let newRootNode = this.values.pop()
       this.values[0] =  newRootNode


       while(newRootNode){
        // root node index
       let newRootNodeIdx  = this.values.indexOf(newRootNode) 

       //index of child nodes
       let lChild
       let lChildIdx = 2*newRootNodeIdx + 1

       //check out of bound idx
       lChildIdx < this.values.length ? lChild = this.values[lChildIdx] : lChild = null 
       
       let rChild
       let rChildIdx = 2*newRootNodeIdx + 2
       //check out of bound idx
       rChildIdx < this.values.length ? rChild = this.values[rChildIdx] : rChild = null 

        
        // finding which child node is greater
       let greaterOne 
       lChild > rChild ? greaterOne=lChild : greaterOne = rChild;
       

        //Edge Cases
        // checking root node is already greater than child nodes, return
        if(newRootNode > lChild && newRootNode >rChild) break

       // root node is greater than greater child node, then return
       if(newRootNode > greaterOne) return

       
       // swap 
       let temp = newRootNode
       this.values[this.values.indexOf(greaterOne)] = temp
       this.values[newRootNodeIdx] = greaterOne


       // making the swapped child position element Root Node
       newRootNode = temp
      
       }

       return maxElement
    }
}


class MinBinaryHeap{
    constructor(){
        this.values = []
    }
    insert(val){
        this.values.push(val)
        if(this.values.length == 1) {
            return this
        }
        let idx = this.values.length -1
        while(idx!=0){
            let parentIndex = Math.floor((idx-1)/2)
            let parentElement = this.values[parentIndex]
            if(val > parentElement) return
                this.values[parentIndex] = val
                this.values[idx] = parentElement
                idx = parentIndex
        }
    }
}

let maxbinaryHeap = new MaxBinaryHeap()

maxbinaryHeap.insert(81)
maxbinaryHeap.insert(69)
maxbinaryHeap.insert(72)
maxbinaryHeap.insert(49)
maxbinaryHeap.insert(57)
maxbinaryHeap.insert(58)
maxbinaryHeap.insert(56)
maxbinaryHeap.insert(24)
maxbinaryHeap.insert(28)
maxbinaryHeap.insert(32)



let minbinaryHeap = new MinBinaryHeap()