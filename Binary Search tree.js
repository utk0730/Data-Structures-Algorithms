/*BIG O
insertion - O(log n)   // not guaranteed as in case of one sided BST
searching - O(log n)   // Big(O) = n
*/

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode
            return this
        }
        let current = this.root
            while(true){
                if(val === current.value) return undefined
                if(val < current.value){
                        if(current.left===null){
                            current.left = newNode;return
                        }
                         current = current.left
                     }
                else{
                        if(current.right ===null){
                            current.right = newNode;return
                        }
                        current = current.right
                    }
            }
            
        }
        search(val){
            if(!this.root) return undefined
            let current = this.root;
            let found = false
            while(!found && current){
                if(val < current.value) current=current.left
                else if(val > current.value) current=current.right
                else {found = true;return current }
            }
           
            return undefined  
        }
        contains(val){
            if(!this.root) return false
            let current = this.root;
            let found = false
            while(!found && current){
                if(val < current.value) current=current.left
                else if(val > current.value) current=current.right
                else {found = true;return true }
            }
           
            return false  
        }
        BFS(){
            let current = this.root
            let queue = []
            let visited = []
            queue.push(current)
            while(queue.length!=0){
                current = queue.shift()
                visited.push(current.value)
                if(current.left) queue.push(current.left)
                if(current.right) queue.push(current.right)
            }
            return visited  
        }
        DFS_preOrder(){
            let current = this.root
            let visited = []
            function helperDFS(x){
                visited.push(x.value)
                if(x.left) helperDFS(x.left)
                if(x.right) helperDFS(x.right)
            }
            helperDFS(current)
             return visited
        }
        DFS_postOrder(){
            let current = this.root
            let visited = []
            function helperDFS(x){
                if(x.left!=null) helperDFS(x.left)
                if(x.right!=null) helperDFS(x.right)
                visited.push(x.value)
               
            }
            helperDFS(current)
            return visited
        }
        DFS_inOrder(){
            let current = this.root
            let visited = []
            function helperDFS(x){
                if(x.left!=null) helperDFS(x.left)
                visited.push(x.value)
                if(x.right!=null) helperDFS(x.right)   
            }
            helperDFS(current)
            return visited
        }      
}
   


let bst = new BST()
bst.insert(10)
bst.insert(6)
bst.insert(3)
bst.insert(8)
bst.insert(15)
bst.insert(20)



