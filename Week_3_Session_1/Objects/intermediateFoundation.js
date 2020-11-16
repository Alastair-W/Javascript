//  # 1 Sigma
//  Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).
//  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num){
    var sigmaSum = 0;
    for(var s = 0; s <= num; s++){
        sigmaSum += s;
    }
    return sigmaSum;
}

console.log(sigma(3));
console.log(sigma(5));

//  #2 Factorial
//  Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1
//   up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num){
    var factSum = num;
    for(var f = 1; f < num; f++){
        factSum *= f;
    }
    return factSum;
}

console.log(factorial(3));
console.log(factorial(5));


//  #3 Fibonacci
//  Create a function to generate Fibonacci numbers. 
//  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  
//  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 
//  4 corresponds to the value four later, etc).  
//  Examples: 
//  fibonacci(0) = 0 (given),
//  fibonacci(1) = 1 (given), 
//  fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
//  fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), 
//  fibonacci(4) = 3 (1+2), 
//  fibonacci(5) = 5 (2+3), 
//  fibonacci(6) = 8 (3+5), 
//  fibonacci(7) = 13 (5+8).  
//  Do this without using recursion first.  
//  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.


function fibonacci(index){
    var fibArr = [0,1];
    for(var i = 2; i <= index; i++){
        var item = fibArr[i-1]+fibArr[i-2];
        fibArr.push(item);
    }
    return fibArr[index];
}

console.log(fibonacci(1));
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));

//  Array: Second-to-Last:
//  Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  
//  If array is too short, return null.

function secToLast(secArray){
    if(secArray.length<2){
        return(null);
    }
    else{
        return(secArray[secArray.length-2]);
    }
}

testArray = [42, true, 4, "Liam", 7]
console.log(secToLast(testArray));


//  Array: Nth-to-Last: 
//  Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  
//  If the array is too short, return null.

function nthToLast(nthArray, index){
    if(nthArray.length<index){
        return(null);
    }
    else{
        return(nthArray[nthArray.length-(index)]);
    }
}

testArr = [5,2,3,6,4,9,7]
console.log(nthToLast(testArr, 3));

//  Array: Second-Largest: 
//  Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secLargest(largeArr){
    var largest = largeArr[0];
    for(var sec = 0; sec < largeArr.length; sec++){
        if(largeArr[sec] > largest){
            largest = largeArr[sec];
        }
    }
    return(largest)
}

testSec = [42,1,4,3.14,7]
console.log(secLargest(testSec));


//  Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  
//  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function double(lastArray){
    for(var d = 0; d < lastArray.length; d++){
        if(d % 2 === 0){
            console.log(d,lastArray[d]);
            lastArray.splice(d+1,0,lastArray[d]);
        }
    }
    console.log(lastArray);
}

testLast = [4, "Ulysses", 42, false]
double(testLast);
