// @mman9our on GitHub && Twitter && Instagram
// Dscription Algorithm =>>
/*
Sorting means rearranging data in ascending or descending order. Bubble sort is one of many sorting algorithms.

In bubble sort algo, we swap the larger number to the end by comparing each number with the previous number.
*/

//Bubble sort code implementation.
function bubbleSort(array) {
    let isSwapped;

    for(let i = array.length; i > 0; i--) {
        isSwapped = false;

        for(let j = 0; j < i - 1; j++) {
            if(array[j] > array[j + 1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                isSwapped = true;
            }
        }

        if(!isSwapped) {
            break;
        }
    }
    return array;
}