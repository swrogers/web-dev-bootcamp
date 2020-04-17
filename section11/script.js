function isEven(number) {
    return !(number % 2);
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

function factorial(number) {
    var sum = 1;

    while(number > 1) {
        sum *= number;
        number--;
    }

    return sum;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

function kebabToSnake(name) {
    return name.split('-').join('_');
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log("blah");
