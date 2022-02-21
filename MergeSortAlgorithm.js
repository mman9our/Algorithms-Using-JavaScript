// @mman9our on GitHub && Twitter && Instagram
// Dscription Algorithm =>>
/*
Merge sort algorithm follows divide and conquer approach. 
It's a combination of two things - merge and sort. In this algo first we divide main array into multiple individual sorted arrays.
Then we merge the indivisual sorted elements together into final array.
*/
function mergeSortedArray(array1, array2) {
    let result = [];
    let i = 0;
    let j = 0;

    while(i < array1.length && j < array2.length) {
        if(array1[i] < array2[j]) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
    }

    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }

    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }

    return result;
}

//The above code merges two sorted array into a new sorted array.

function mergeSortedAlgo(array) {
    if(array.length <= 1) return array;

    let midPoint = Math.floor(array.length / 2);
    let leftArray = mergeSortedAlgo(array.slice(0, midPoint));
    let rightArray = mergeSortedAlgo(array.slice(midPoint));

    return mergeSortedArray(leftArray, rightArray);
}
//The above algo uses recursion to divide the array into multiple single element array.
