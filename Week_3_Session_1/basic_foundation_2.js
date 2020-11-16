//  1. Biggie Size - Given an array, write a function that changes all positive numbers in the array 
//  to the string "big".  
//  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggie(biggieArray){
    for(var b = 0; b<biggieArray.length;b++){
        if(biggieArray[b] >=0){
            biggieArray[b] = "big";
        }
    }
    console.log(biggieArray);
}
testBiggie = [-1,3,5,-5];
biggie(testBiggie);


//  2. Print Low, Return High - Create a function that takes in an array of numbers.  
//  The function should print the lowest value in the array, and return the highest value in the array.

function printLow(printArray){
    maxPrint = printArray[0];
    minPrint = printArray[0];
    for(var p = 0;p<printArray.length;p++){
        if(printArray[p]>maxPrint){
            maxPrint = printArray[p];
        }
        else if(printArray[p]<minPrint){
            minPrint = printArray[p];
        }
    }
    console.log("Highest: "+maxPrint, "Lowest: "+minPrint);
}

testPrint = [2,4,5,23,4,6,7];
printLow(testPrint);


//  3. Print One, Return Another - Build a function that takes in an array of numbers.  
//  The function should print the second-to-last value in the array, 
//  and return the first odd value in the array.

function printReturn(returnArray){
    console.log(returnArray[returnArray.length-2]);
    for(var r = 0; r<returnArray.length; r++){
        if(returnArray[r] % 2 != 0){
            return returnArray[r];
        }
    }
}

testReturn = [2,6,8,7,2,3];
console.log(printReturn(testReturn));


//  4. Double Vision - Given an array (similar to saying 'takes in an array'), 
//  create a function that returns a new array where each value in the original array has been doubled.
//  Calling double([1,2,3]) should return [2,4,6] without changing the original array.


function double(singleArr){
    var doubleArr = [];
    for(var d = 0; d<singleArr.length;d++){
        doubleArr.push(singleArr[d]*2);
    }
    console.log(doubleArr);
}

testSingleArr = [1,2,3];
double(testSingleArr);

//  5. Count Positives - Given an array of numbers, create a function to replace the last value with the 
//  number of positive values found in the array.  
//  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function counts(countArr){
    var counter = 0;
    for(var c of countArr){
        if(c >= 0){
            counter++;
            countArr[countArr.length-1] = counter;  
        }
    }
    console.log(countArr);
}

newCount = [-1,1,1,1];
counts(newCount);

//  6. Evens and Odds - Create a function that accepts an array.  
//  Every time that array has three odd values in a row, print "That's odd!".  
//  Every time the array has three evens in a row, print "Even more so!".

function increment(moreArr){
    for(var x = 0; x < moreArr.length-2; x++){
        if(moreArr[x] % 2 ===0 && moreArr[x+1] % 2 === 0 && moreArr[x+2] % 2 === 0){
            console.log("Even more so!")
        }
        else if(moreArr[x] % 2 != 0 && moreArr[x+1] % 2 != 0 && moreArr[x+2] % 2 != 0){
            console.log("That's odd!")
        }
    }
}

testMoreArr = [2,6,4,11,13,11];
increment(testMoreArr);


//  7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, 
//  specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
//  Afterward, console.log each array value and return arr.

function incrSec(arrayNum){
    for(var j = 0; j<arrayNum.length; j++){
        if(j % 2 != 0){
            arrayNum[j] = arrayNum[j]+1;
        }
    }
    console.log(arrayNum);
    return arrayNum;
}

myTestList = [1,3,2,4,5,7,3,34];
incrSec(myTestList);


//  8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') 
//  containing strings.  Working within that same array, replace each string with a number - 
//  the length of the string at the previous array index - and return the array.  
//  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. 
//  Hint: Can for loops only go forward?

function prevLengths(stringsArr){
    for(var str = stringsArr.length-1; str>=1; str--){
        stringsArr[str] = stringsArr[str-1].length;
    }
    console.log(stringsArr);
}

strList = ["name", "tony", "sam", "people", "country"];
prevLengths(strList);


//  9. Add Seven - Build a function that accepts an array. 
//  Return a new array with all the values of the original, but add 7 to each. 
//  Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function seven(sevenArr){
    var newSeven = [];
    for(var sev = 0; sev < sevenArr.length; sev++){
        newSeven[sev] = sevenArr[sev]+7;
    }
    return newSeven;
}

testSeven = [1,2,3];
console.log(seven(testSeven));

//  10. Reverse Array - Given an array, write a function that reverses its values, in-place.  
//  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  
//  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverse(revArray){
    if(revArray.length % 2 === 0){
        for(var rev = 0; rev < revArray.length/2; rev++){
            [revArray[rev], revArray[revArray.length-(1+rev)]] =  [revArray[revArray.length-(1+rev)], revArray[rev]]
        }
    }
    else if (revArray.length % 2 != 0){
        for(var rev = 0; rev < Math.floor(revArray.length/2); rev++){
            [revArray[rev], revArray[revArray.length-(1+rev)]] =  [revArray[revArray.length-(1+rev)], revArray[rev]]
        }
    }
    return revArray;
}

testReverse = [3,1,6,4,2,8,10,12]
console.log(reverse(testReverse));


//  11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, 
//  but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function negative(negArr){
    var newArray = [];
    for(var e = 0; e<negArr.length;e++){
        if(negArr[e]>0){
            newArray.push(negArr[e]*-1);
        }
        else{
            newArray.push(negArr[e]);
        }
    }
    return newArray;
}

testNegArr = [1,-3,5]
console.log(negative(testNegArr));


//  12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values 
//  is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function hungry(hungryArr){
    var counterHun = 0;
    for(var h = 0; h < hungryArr.length; h++){
        if(hungryArr[h] === "food"){
            console.log("yummy");
            counterHun += 1;
        }
    }
    if(counterHun === 0){
        console.log("I'm hungry");
    }
}

testHunArr = ["drink", "fool", "toiletries", "toys", "bags", "fool"]
console.log(hungry(testHunArr));


//  13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
//  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  
//  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapCenter(swapArr){
    if(swapArr.length % 2 === 0){
        for(var sC = 0; sC < swapArr.length/2; sC++){
            if(sC % 2 === 0){
            [swapArr[sC], swapArr[swapArr.length-(1+sC)]] = [swapArr[swapArr.length-(1+sC)], swapArr[sC]]
            }
        }
    }
    else if(swappArr.length %2 != 0){
        for(var sC = 0; sC < Math.floor(swapArr.length/2); sC++){
            if(sC % 2 === 0){
            [swapArr[sC], swapArr[swapArr.length-(1+sC)]] = [swapArr[swapArr.length-(1+sC)], swapArr[sC]]
            }
        }
    }
    console.log(swapArr);
}

testSwap = [1,2,3,4,5,6,7,8,9,10]
swapCenter(testSwap);

//  14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number
//  num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scale(scaleArr, num){
    for(var n = 0; n<scaleArr.length;n++){
        scaleArr[n] = scaleArr[n]*num;
    }
    return scaleArr;
}

testScaleArr = [3,4,5,6,7,8,9];
var testNum = 3;

console.log(scale(testScaleArr, testNum));
