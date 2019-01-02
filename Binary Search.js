function binarySearch(x,e){
    let left = 0;
    let right = x.length -1;
    while(left<=right){
        let middle = parseInt((left+right)/2);
        if(x[middle] == e){
        return middle
    }
        else if(x[middle] < e){
            left = middle+1
        }
        else{
            right = middle-1
        }
    }
    return -1
    
}
binarySearch([1,2,3,4,5],5)