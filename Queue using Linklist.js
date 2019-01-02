/* Queue  - FIFO first in first out */
// background tasks,uploading resources,printing copies

class Node{
    constructor(value){
        this.value = value
        this.prev = null
    }
}
class Queue{
    constructor(){
        this.first=null
        this.last = null
        this.size = 0
    }
    enqueue(value){
        let newNode = new Node(value)
        if(this.size==0){
            this.first= newNode
            this.last = newNode
        }else if(this.size ==1){
           this.first = newNode
           this.last.prev = this.first
        }
        else{
           this.first.prev = newNode
           this.first = newNode
        }
        return ++this.size
    }
    dequeue(){
        if(this.size == 0) return null
        let poppedItem = this.last
        if(this.size ==1){
            this.first = null
            this.last = null
        }
        else{
            this.last = this.last.prev
        }
        this.size--
        poppedItem.prev = null
        return poppedItem
    }
}
let q = new Queue()

