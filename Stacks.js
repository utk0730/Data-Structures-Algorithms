/* Stacks is a data structure abiding LIFO structure.
it is just a concept abiding certail rules such that store data 
in a way that last stored will be the first to removed.
so, there is more than one way of implementing stacks
LIFO - last in first out
FILO - first in last out
used in - managing function - call stack
        - undo/redo
        -routing
*/

// Linklist implementation of Stacks
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
     push(val){
         let node = new Node(val)
         if(this.size == 0){
           this.first = node
           this.last = node  
         }
         else{
             node.next = this.first
             this.first = node
         }
         return ++this.size

    }
    pop(){
        if(this.size <= 0){
            return null
        }
       let poppedItem = this.first
       if (this.length ==1){
            this.first = null
            this.last = null
        }
        else if(this.size >1){
            this.first = this.first.next
        }
        this.size--
        poppedItem.next = null
        return poppedItem.value
        
    }
}

let n = new Stack()
n.push('book1')
n.push('book2')
n.push('book3')
n.push('book4')
