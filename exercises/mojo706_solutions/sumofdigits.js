function sum_of_digits(A){
    return A.join('').split('').map(Number).reduce(function(a, b){ return a+b; });
}

console.log(sum_of_digits([10, 20, 3, 5, 6, 23]))
