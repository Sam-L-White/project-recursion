function fibs(n){
    let fibArray = []
    for(let x = 0; x < n; x++){
        if(x == 0){
            fibArray[x] = 0
        } else if(x == 1 || x == 2){
            fibArray[x] = 1
        } else {
            fibArray[x] = fibArray[x-1] + fibArray[x-2]
        }    
    }
    return fibArray
}

function fibsRec(n){
    if(n === 1){
        return [0]
    }
    if(n === 2){
        return [0,1]
    }
    return [...fibsRec(n-1), fibsRec(n-1)[n - 2] + fibsRec(n-1)[n - 3]];
}

function mergeSort(array){
    if(a < b){
        return a
    } else {
        return b
    }
}

console.log(fibs(10))



console.log(fibsRec(10))