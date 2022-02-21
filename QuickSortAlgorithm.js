// @mman9our on GitHub && Twitter && Instagram
// Dscription Algorithm =>>
/*
Quick sort is one of the fastest sorting algorithm. In quick sort we select a single element known as pivot and we 
will move all element (smaller than pivot) to the left of pivot. We will repeat this process for array to left and right of pivot until the array is sorted.
*/

//Pivot Utility
function pivotUtility(array, start=0, end=array.length - 1) {
    let pivotIndex = start;
    let pivot = array[start];

    for(let i = start + 1; i < array.length; i++) {
        if(pivot > array[i]) {
            pivotIndex++;
            [array[pivotIndex], array[i]] = [array[i], array[pivotIndex]];
        }   
    }

    [array[pivotIndex], array[start]] = [array[start], array[pivotIndex]];
    return pivotIndex;
}
//The above code identifies the correct position of pivot and returns that position index.

function quickSort(array, left=0, right=array.length-1) {
    if (left < right) {
        let pivotIndex = pivotUtility(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }

    return array;
}
//The above code uses recursion to keep moving pivot to it's correct position for left and right array of pivot.
