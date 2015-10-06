// Sum of all the unique digits in an array.

function sum_of_unique_digits(A) {
    var digitsArray =  A.join('').split('');
    var unique = digitsArray.filter(function(elem, index, self){
        return index === self.indexOf(elem);
    });
    var total = 0;
    for (var i in unique) {total += parseInt(unique[i]);}
    console.log(total);
}

sum_of_unique_digits([10, 20, 3, 5, 6, 23])
