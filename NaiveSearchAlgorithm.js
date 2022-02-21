// @mman9our on GitHub && Twitter && Instagram
// Dscription Algorithm =>>
/* 
Naive search algorithm is used to find if a string contains a given substring. For example, check if "helloworld" contains the substring "owo".
First loop on the main string ("helloworld").
Run a nested loop on the substring ("owo").
If character does not match then break inner loop else keep looping.
If inner loop is completed and got a match, then return true else keep the outer loop going.
*/

function naiveSearch(mainStr, subStr) {
    if (subStr.length > mainStr.length) return false;

    for(let i = 0; i < mainStr.length; i++) {
       for(let j = 0; j < subStr.length; j++) {
            if(mainStr[i + j] !== subStr[j]) break;
            if(j === subStr.length - 1) return true; 
        }
    }
    return false;
}