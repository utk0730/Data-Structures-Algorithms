function pivotHelperFunc(x,start=0,end=x.length-1){
    function swap(arr,pos1,pos2){
    let temp;
    temp = arr[pos1]
    arr[pos1] = arr[pos2]
    arr[pos2] = temp
    }

    let pivotIndex = start
    let swapIndex = start // to set swapIndex of subArrays during recursion call
                          //,initialize swapIndex with start
                          

   for(let i=start+1;i<=end;i++){
       if(x[pivotIndex] > x[i]){
           swapIndex++
           swap(x,i,swapIndex)
       }
       
   }
   swap(x,pivotIndex,swapIndex)     
   return swapIndex  
}
function quickSort(x,start=0,end=x.length-1){
    if(start < end){
    let pivotIndex1 = pivotHelperFunc(x,start,end)
    quickSort(x,start,pivotIndex1-1)
    quickSort(x,pivotIndex1+1,end) 
    }
    return x   
} 

quickSort([-2,10,282,33,101,-28])