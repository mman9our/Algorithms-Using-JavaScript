// @mman9our on GitHub && Twitter && Instagram
// Dscription Algorithm =>>
// function calling itself is recursion. Think of it as an alternative to loop.

let count = 1;
function recursiveFn() {
    console.log(`Recursive ${count}`);
    if (count === 10) return;
    count++;
    recursiveFn();
}

recursiveFn();