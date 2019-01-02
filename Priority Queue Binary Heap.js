/*
pQueue - a data structure where each element has a priority.
elements with higher priority are processes before elements with lower
priority.

Priority Queues are separate from Heaps
it can be implemented by Heap  or any other data structure like arrays/lists.

pQueue is ofter confused with Heaps as it is moslt commonly implemented by Heap.

binary heaps , with the help of a bit of math, can be easily stored as arrays
*/

class Node{
    constructor(val,priority){
        this.value = val
        this.priority = priority

    }
}
class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(v,p){
        let newNode = new Node(v,p)
        this.values.push(newNode)

        //bubble up
        if(this.values.length == 1) {
            return this
        }
        let idx = this.values.length -1
        while(idx>0){
            let parentIndex = Math.floor((idx-1)/2)
            let parentElement = this.values[parentIndex]
            if(p > parentElement.priority) return
            this.values[parentIndex] = newNode
            this.values[idx] = parentElement
            idx = parentIndex
        }
    }
    dequeue(){
         if(this.values.length == 0) return null
        if(this.values.length == 1) return 'only one item in Heap,that is max, and cant be deleted'

        // storing first element to return in the end,
        // as this is max Element in heap
        let minElement = this.values[0] 
        
        //replacing root node value with last element is array
       let newRootNode = this.values.pop()
       this.values[0] =  newRootNode

        // sink down
       while(newRootNode){
        // root node index
       let newRootNodeIdx  = this.values.findIndex(function(x){
           return x.priority === newRootNode.priority
       })

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
       let smallerOne
        
       if(lChild && rChild){
           lChild.priority < rChild.priority ? smallerOne=lChild : smallerOne = rChild;
           //Edge Cases
           // checking root node is already greater than child nodes, return
           if(newRootNode.priority < lChild.priority && newRootNode.priority < rChild.priority) break
       }
       else{
         if(lChild==null && rChild==null) break
         else if(lChild==null && rChild!=null) smallerOne = rChild
         else smallerOne=lChild
       } 
      if(newRootNode.priority < smallerOne.priority) break

       // swap
      let smallerOneIndex = this.values.findIndex(x => x.priority == smallerOne.priority)
       let temp = newRootNode
       this.values[smallerOneIndex] = temp
       this.values[newRootNodeIdx] = smallerOne

       }

       return minElement
    }
}

var pq = new PriorityQueue()
pq.enqueue('pb',1)
pq.enqueue('pb',10)
pq.enqueue('pb',3)
pq.enqueue('pb',11)
pq.enqueue('pb',0)
pq.enqueue('pb',2)
pq.enqueue('pb',8)
pq.enqueue('pb',-1)