function swap2(x,j){
        let temp
        temp = x[j];
        x[j]=x[j+1];
        x[j+1] = temp
   return 
}
function bubsort(x){
    let temp,swap = false
    for(let i=0;i<x.length-1;i++){
        for(let j=0;j<x.length-i-1;j++){
            console.log(x,x[j],x[j+1])
           if(x[j]>x[j+1]){
               swap2(x,j);
               swap = true
           }
           else{
              swap = false 
           }
           
        }
        console.log('one pass complete',x)
        if(!swap){
            break
        }
    }
   return x
}
bubsort([10,1,2,3,4,5,16,7])