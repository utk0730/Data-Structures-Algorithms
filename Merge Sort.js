function mergeSortedArrays(a,b){
    let res = [];
    let i=0,j=0;
    
    while(i<a.length && j <b.length){
        if(a[i] > b[j]){
            res.push(b[j]);
            j++
        }else{
            res.push(a[i]);
            i++
        }
    }
    while(j<b.length){
        res.push(b[j]);
        j++
    }
    while(i<a.length){
        res.push(a[i]);
        i++
    }
    return res
}
//mergeSortedArrays([1,15,20,67,98],[12,30,36,45])
function mergeSort(x){
    if(x.length <=1)
    return x
    let results = [];
    let left,right;
    let mid = Math.floor(x.length/2)
    left = mergeSort(x.slice(0,mid))
    right = mergeSort(x.slice(mid))
    return mergeSortedArrays(left,right)

}
mergeSort([7, 3, 1, 0, 0, 6])
