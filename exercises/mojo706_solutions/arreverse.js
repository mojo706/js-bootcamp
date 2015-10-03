/* Reverse an Array Without
* Using BIFs
* Sat 3 Oct 5 AM :)
*/

function reverseArr(arr) {
    var toString = JSON.stringify(arr);
    var newString = '';
    for(var x = toString.length - 1; x > 0; x--) {
        newString = newString + toString[x];
    }
    // [1,2,3,4]
    console.log(newString)
    return newString.replace(/([\[|\]|\,)/g, '').split('');
}
console.log(reverseArr([1,2,3,4,5,6]))
