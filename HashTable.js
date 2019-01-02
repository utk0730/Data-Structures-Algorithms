/*
Hash Tables - they are used to store key-value pairs
Unlike arrays where keys are 0,1,2,3.... and so on
and in ordered keys-value pairs, Hash tables have unordered
key-value pairs.Unlike arrays where keys can only be the number,hash table keys 
can be of any types.

Operations like search,add,remove are faster to perform in hash tables than in th arrays.
*/

/* What makes a good Hash Function ???
hash function takes an input of any size and gives 
o/p of a fixed size

----------------------------------------
1> Fast (constant time)
2> distribute o/p uniformally
3> deterministic(gives same o/p for same i/p)

*/

class HashTable{
    constructor(size=30){
        this.keyMap = new Array(size)
    }
    hash(key){
        let total = 0;
        let weirdPrime = 31
        for(let i=0;i<Math.min(key.length,100);i++){
            let ch = key[i]
            let value = ch.charCodeAt(0) -96
            total = (total * weirdPrime + value) % this.keyMap.length
        }
        return total
    }
    set(key,value){
        let index = this.hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        } 
        this.keyMap[index].push([key,value])
    }
    get(key){
        let index = this.hash(key)
        if(this.keyMap[index]){
             for(let i=0;i<this.keyMap[index].length;i++){
               if(this.keyMap[index][i][0] == key){
                 return this.keyMap[index][i][1]
                }  
             }
            return 
        }
        return undefined
       
    }
    getKeys(){
        let keysArr = []
        for(let i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j=0;j<this.keyMap[i].length;j++){
                    if(!keysArr.includes(this.keyMap[i][j][1]))
                     keysArr.push(this.keyMap[i][j][0])
                }
            }
        }
        return keysArr
    }
    getValues(){
        let valuesArr = []
        for(let i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j=0;j<this.keyMap[i].length;j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1]))
                     valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valuesArr
    }
}
let ht = new HashTable(4)
ht.set('pink','myFavcolor')
ht.set('red','rosecolor')
ht.set('white','classic color')
ht.set('black','party color')
ht.set('blue','common color')


