class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoublyLinkList{
    constructor(){
        this.head = null
        this.tail = null
        this.length= 0
    }
    push(val){                  // push to the end
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
 
        }
        this.length++
        return this
    }
    pop(){                  // pop from the end
        let item
        if(this.length <= 0){
            return null
        }
        else if(this.length ==1){
            item = this.head
            this.head = null
            this.tail = null
        }else{
            item = this.tail
            let prevItem = this.tail.prev 
            prevItem.next = null
            this.tail = prevItem
            item.prev = null
        }
        this.length--
        return item
     }
     shift(){ 
         let oldHead = this.head   // delete from the beginning
         if(this.length == 0){
             return null
         }
         else if(this.length == 1){
             this.head= null
             this.tail = null
         }
         else if(this.length == 2){
             this.head = this.tail
             this.head.next =null
             this.tail.prev = null
         }else{
            let nextHead = this.head.next
            nextHead.prev = null
            this.head = nextHead
            oldHead.next = null
         }  
         this.length--
         return oldHead
     }
     unshift(val){             //add to the beginning
        let newNode = new Node(val)
        if(this.length == 0){
            this.head = newNode
            this.tail = newNode
        }
        else if(this.length >=1){
            let currentHead = this.head
            this.head = newNode
            newNode.next = currentHead
            currentHead.prev = newNode
        }
        this.length++
        return this
         
     }
    getElementAtPos(idx){
        if(idx <0 || idx > this.length-1) return undefined
        else if (idx == 0) return this.head
        else if(idx == this.length -1) return this.tail
        if(idx <= this.length/2){
          alert('working from beginning')
          let current = this.head  
          let counter = 0
          while(counter != idx){
            current = current.next
            counter++
            }   
        }else{
            alert('working from end')
             let current = this.tail
            let counter = this.length -1
            while(counter!=idx){
                current = current.prev
                counter--
            }
        }
        return current
    }
    setElementAtPos(idx,val){
        let node = this.getElementAtPos(idx);
        if(node){
            node.value= val
            return true
        }
        return false
    }
    insertNodeAtPos(idx,val){
        if(idx<0 || idx >this.length){
            return 'invalid position for new node'
        }
        if(idx == 0){
            this.unshift(val)
        }
        else if(idx == this.length){
            this.push(val)
        }else{
            let newNode = new Node(val)
            let elementAtIdx = this.getElementAtPos(idx)
            let elementBeforeIdx = this.getElementAtPos(idx-1)
            elementBeforeIdx.next = newNode
            newNode.prev = elementBeforeIdx
            newNode.next = elementAtIdx
            elementAtIdx.prev = newNode
            this.length++
        }
        return true
    }
    deleteNodeAtPos(idx){
        if(idx<0 || idx >this.length){
            return 'invalid node position'
        }else if(idx == 0){
            this.shift()
        }else if(idx == this.length-1){
            this.pop()
        }
        else{
            let nodeToDelete = this.getElementAtPos(idx);
            let prevNode = nodeToDelete.prev
            let nextNode = nodeToDelete.next
            prevNode.next = nextNode
            nextNode.prev = prevNode
            nodeToDelete.next = null
            nodeToDelete.prev = null
            this.length--
        }
    }
}
let n  = new DoublyLinkList()
n.push(1)
n.push(2)
n.push(3)
n.push(4)
n.push(5)
n.push(6)
n.push(7)