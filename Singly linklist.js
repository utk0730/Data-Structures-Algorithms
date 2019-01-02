class Node{
    constructor(val){
        this.value = val;
        this.next = null
    }
}
class SinglyLinkList{
    constructor(){
        this.head = null
        this.tail = null
        this.length =0
    }
    push(val){          // push in the end
        var newNode = new Node(val)
        if(!this.head){
        this.head = newNode;
        this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){          //pop from the end
        if(!this.head){
            return undefined
        } 
        let current = this.head
        let newTail = current
         while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length == 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    shift(){            //delete node from beginning of Linklist
        if(!this.head){
            return undefined
        }
        let deletedHeadElement = this.head;
        this.head = this.head.next
        this.length--
        if(this.length == 0){
            this.tail = null
        }
        return deletedHeadElement
    }
    unshift(val){            // add node to beginning of linklist
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            newNode.next = this.head
            this.head = newNode
        }         
        this.length++
        return this
    }
    getElementAtPos(pos){
        let current = this.head
        let counter = 0
        if(pos > this.length-1 || pos < 0){
            return null
        }
        while(counter!=pos){
            current= current.next
            counter++
        }
        
        return current
    }

    setElementAtPos(pos,value){
       let current = this.getElementAtPos(pos)
       if(current){
           current.value = value
           return true 
       }
       return false
       
    }
//  setElementAtPos(pos,val){
//         if(pos<0 || pos>this.length) return false
//         let counter=0
//         let current = this.head
//         while(counter!=pos){
//             current = current.next
//             counter++
//         }
//         current.value=val
//         return true
//     }

    insertNewNodeAtPos(pos,val){
        if(pos<0 || pos >this.length){
            return 'invalid position'
        }
        if(pos == 0){
            this.unshift(val)
        }else if(pos == this.length){
            this.push(val)
        }
        else{
            let newNode = new Node(val)
            let current = this.getElementAtPos(pos-1);
            let currentNext = current.next;
            current.next = newNode
            newNode.next = currentNext 
            this.length++
        }
        return true
        
    }
    deleteNodeAtPos(pos){
        if(pos<0 || pos >= this.length){
            return null
        }
        else if(pos==0){
            return this.shift() 
        }
        else if(pos == this.length-1){
            return this.pop()  
        }
        else{
               let prevNode = this.getElementAtPos(pos-1);
               let nodeToDelete = this.getElementAtPos(pos);
               prevNode.next = nodeToDelete.next
               nodeToDelete.next = null
               this.length--
               return nodeToDelete
        }
        
       
    }
                //h          t         //t          h 
    reverse(){ // 1->10->20->30 
  
        let node = this.head           
        this.head = this.tail        //t           h
        this.tail = node            // 1<-10<-20<-30  
        let next,prev = null
        for(let i=0;i<this.length;i++){
            next = node.next
            node.next = prev 
            prev  = node
            node = next
        }
        return this
   
    }
    deleteDuplicates(){
        let current=this.head
        while(current.next!=null){
            if(current.value == current.next.value){
               current.next = current.next.next
            }else{
                current=current.next
            }
        }
        
       return this.head
    }
   removeElements(val) {
     while(this.head!=null && this.head.value==val){
         this.head=this.head.next
     }
     let current = this.head
     while(current!=null && current.next!=null){
         if(current.next.value==val){
             current.next=current.next.next
         }else{
             current=current.next
         }
     }
     return this.head
};
    
    mergeSortedList(l1,l2){
        let curr1 = l1.head,len1=0
        while(curr1!=null){
            len1++
            curr1=curr1.next
        }
        let curr2 = l2.head,len2=0
        while(curr2!=null){
            len2++
            curr2=curr2.next
        }
        let current
        len1 > len2  ? current = l1.head : current = l2.head
        let x
    }
}
var n = new SinglyLinkList()
// var l1 = new SinglyLinkList()
// var l2 = new SinglyLinkList()
// l1.push(2)
// l1.push(2)
// l1.push(3)
// l1.push(5)

// l2.push(1)
// l2.push(3)
// l2.push(4)

//n.deleteNodeAtPos(2)


/*Big(O) - SinglyLinkList
Are excellent in case if insertion and deletion at begining in needed - O(1)
whereas Accesing element in SLL is of time complexity O(N)
*/






