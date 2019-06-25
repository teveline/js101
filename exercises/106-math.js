// Let's do some grade-school math.
// Actually: let's have the computer do the math for us :)
// This page may be helpful for this exercise:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create a function "add99" that takes one argument and adds the number 99 to it.
// You can assume that the argument passed in will be a number value.
function add99(number) {
    let total = number + 99
    return total
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create a function "sum" that takes 2 arguments and sums them together.
// Assume that both arguments are numbers.
function sum(num1,num2) {
    let total = num1 + num2
    return total
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create a function "difference" that takes 2 number arguments and returns their
// difference.
// ie: the second number substracted from the first number
function difference(num1,num2) {
    let total = num1 - num2
    return total
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create a function "multiply" that takes 2 number arguments and returns their
// product.
function multiply(firstNumber,secondNumber) {
    let product = firstNumber * secondNumber
    return product
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create a function "divide" that takes 2 number arguments and returns their
// product.
function divide(num1, num2) {
    let quotient = num1 / num2
    return quotient
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The modulus operator (%) works like remainder from division.
// Create a function "mod" that takes 2 number arguments and returns the
// remainder of the first divided by the second.
function mod(num1,num2) {
    let modulo = num1 % num2
    return modulo
}
