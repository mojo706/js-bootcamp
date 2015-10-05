/* Reverse an Array Without
* Using BIFs
* Sat 3 Oct 5 AM :)
*/

function reverse(A) {
    var toString = JSON.stringify(A);
    var newString = '';
    for(var x = toString.length - 1; x > 0; x--) {
        newString += toString[x];
    }
    // [1,2,3,4]
    // console.log(newString)
    return newString.replace(/([\[|\]|\,)/g, '').split('');
}
console.log(reverse([1,2,3,4,5,6]))
