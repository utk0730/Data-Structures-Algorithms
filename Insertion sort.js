function insertionSort(x){
    for(let i=1;i<x.length;i++){
        let currentValue = x[i]
        for(var j=i-1;j>=0 && x[j] > currentValue;j--){
           x[j+1] =x[j]
        }
        console.log(x)
        x[j+1] = currentValue
        
    }
  return x
}
insertionSort([1,-1,-2])