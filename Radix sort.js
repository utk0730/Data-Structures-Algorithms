//helper functions for Radix sort
function getDigitPlaceInNum(n,d){
    let i =0;
    while(i<=d){
        var x = n%10
        n = parseInt(n/10)
        i++
    } 
    return Math.abs(x)  
}
function digitCountInNum(n){
    //return Math.abs(n).toString().length
    return Math.floor(Math.log10(Math.abs(n)))+1  
}

function maxDigitsInArrayOfNumbers(x){
    let maxNum = 0;
    for(let i=0;i<x.length;i++){
        maxNum = Math.max(maxNum,digitCountInNum(x[i]))
    }
    return maxNum
}
// Non-Comparison Sort Algorithm / Big(O) = O(nk) , where
// n = no of array elements, k = maxDigitNumber
function radixSort(x){
    for(let i=0;i<maxDigitsInArrayOfNumbers(x);i++){
        let arr = [[],[],[],[],[],[],[],[],[],[]]
        //let arr = Array.from({length:10},()=> []) creates
        // an array containing 10 empty array
        for(let j=0;j<x.length;j++){
          arr[getDigitPlaceInNum(x[j],i)].push(x[j])
        }
        console.log('digit arr',...arr)
        x = [].concat(...arr) // flatten array to level 1
        console.log('arr for next digit iteration', x)
    }
    return x
    
}
radixSort([0,1,22,31,12,34,9,128,37,26])