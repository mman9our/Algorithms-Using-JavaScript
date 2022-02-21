// @mman9our on GitHub && Twitter && Instagram
// Dscription Algorithm =>>
/*
Linear search algorithm is pretty simple. Say that you need to find if a number exists in a given array or not.
You will run a simple for loop and check every element untill you find the one you are looking for.
*/

const array = [3, 8, 12, 6, 10, 2];

// Find 10 in the given array.
function checkForN(arr, n) {
    for(let i = 0; i < array.length; i++) {
        if (n === array[i]) {
            return `${true} ${n} exists at index ${i}`;
        }
    }

  return `${false} ${n} does not exist in the given array.`;
}

checkForN(array, 10);