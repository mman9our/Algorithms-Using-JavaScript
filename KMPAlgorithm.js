// @mman9our on GitHub && Twitter && Instagram
// Dscription Algorithm =>>
/*
KMP algo is a pattern recongnition algorithm, and it is a bit tough to understand. Ok, let's try to find if the string "abcabcabspl" contains the sub string "abcabs".

If we try to solve this with Naive Search Algo, it will match for first 5 characters but not for 6th character. And we will have to start over again with next iteration, 
we will lost all the progress in previous iteration.

So, in order to save our progress and use it, we must use something called LPS table. Now in our matched string "abcab" we will find the longest same prefix and suffix.

Here, in our string "abcab" "ab" is the longest same prefix and suffix.
Now, we will begin the next search iteration from index 5 (for main string). We saved two characters from our previous iteration.
In order to figure out the prefix, suffix, and where to start next iteration from we use LPS table.
*/

//Here is how to calculate LPS table.
function calculateLpsTable(subStr) {
    let i = 1;
    let j = 0;
    let lps = new Array(subStr.length).fill(0);

    while(i < subStr.length) {
        if(subStr[i] === subStr[j]) {
            lps[i] = j + 1;
            i += 1;
            j += 1;
        } else {
            if(j !== 0) {
                j = lps[j - 1];
            } else {
                i += 1;
            }
        }
    }
    return lps;
}
//Here is the implementation in code using LPS table.
function searchSubString(string, subString) {
    let strLength = string.length;
    let subStrLength = subString.length;
    const lps = calculateLpsTable(subString);

    let i = 0;
    let j = 0;

    while(i < strLength) {
        if (string[i] === subString[j]) {
            i += 1;
            j += 1;
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i += 1;
            }
        }
        if (j === subStrLength) return true;
    }

    return false;
}