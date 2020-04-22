console.log("Print Reverse");

function printReverse(arr) {
    var length = arr.length;

    while( length > 0 ) {
        length--;
        console.log(arr[length]);
    }
}

console.log(printReverse([1,2,3,4]));
console.log(printReverse(["a","b","c"]));


console.log("Is Uniform");

function isUniform(arr) {
    for (var i=0; i < arr.length-1; i++) {
        if(arr[i] !== arr[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1,1]));
console.log(isUniform([1,1,1,2,1]));
console.log(isUniform(["a", "b", "c"]));
console.log(isUniform(["b", "b", "b", "b"]));
