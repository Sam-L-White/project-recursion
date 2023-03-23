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

function merge(firstHalf, secondHalf){
    let mergedArray = []

    let firstCount = 0
    let secondCount = 0

    while(firstCount < firstHalf.length && secondCount < secondHalf.length){

        if(firstHalf[firstCount] < secondHalf[secondCount]){

            mergedArray.push(firstHalf[firstCount])
            firstCount++

        } else {

            mergedArray.push(secondHalf[secondCount])
            secondCount++
        }
    }

    while (firstCount < firstHalf.length){

        mergedArray.push(firstHalf[firstCount])
        firstCount++
    }

    while (secondCount < secondHalf.length){

        mergedArray.push(secondHalf[secondCount])
        secondCount++
    }

    return mergedArray
}

function mergeSort(array){

    if(array.length < 2){

        return array

    } else {

        let half = Math.ceil(array.length / 2)
        let firstHalf = array.slice(0, half)
        let secondHalf = array.slice(half)
        let firstResult = mergeSort(firstHalf)
        let secondResult = mergeSort(secondHalf)
        let result = merge(firstResult, secondResult)
        return result
    }
}

let mergeArray = [1,4,6,2,5,3]
console.log(mergeSort(mergeArray))

/*console.log(fibs(10))





console.log(fibsRec(10))*/