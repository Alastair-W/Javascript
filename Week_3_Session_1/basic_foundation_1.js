//  Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function returnArr(maxNum){
    var arr= [];
    for (var i = 1; i<=maxNum; i++){
        arr.push(i);
    }
    console.log(arr);
    
}
returnArr(255);

//  Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.
//  You may use a modulus operator for this exercise.

function getEven(a){
    var sum = 0;
    for (var s = 1; s<=a; s++){
        if (s % 2 == 0){
            sum += s;
        }
    }
console.log(sum);
}

getEven(1000);

//  Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.
//  (e.g. 1+3+5+...+4997+4999).

function getOdd(b){
    var oddSum = 0;
    for (var s = 1; s<=b; s++){
        if (s % 2 !== 0){
            oddSum += s;
        }
    }
console.log(oddSum);
}

getOdd(5000);


//  Iterate an array - Write a function that returns the sum of all the values within an array.
//  (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iterateArr(arr){
    var newSum1 = 0;
    for (var c = 0; c<arr.length; c++){
        newSum1 += arr[c];
    }
    console.log(newSum1)
}

list = [-4, 5, 2, 4];
iterateArr(list);

//  Find max - Given an array with multiple values, write a function that returns the maximum number in the array.
//  (e.g. for [-3,3,5,7] max is 7)

function maxNum(arrOne){
    var max = 0;
    for (var l = 0; l < arrOne.length; l++ ){
        if (arrOne[l] >= max){
            max = arrOne[l];
        }
    }
    console.log(max);
}

newList = [-3,3,22,7];
maxNum(newList);



//  Find average - Given an array with multiple values, write a function that returns the average of the values in the array.
//  (e.g. for [1,3,5,7,20] average is 7.2)

function average(avgList){
    var avg = 0;
    var avgSum = 0;
    for (var t = 0; t < avgList.length; t++){
        avgSum += avgList[t];
    }
    avg = avgSum / avgList.length;
    console.log(avg);
}


avgArr = [1,3,5,7,20]
average(avgArr);


//  Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.
//  (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddArr(oddInput){
    var oddList = [];
    for (var u = 1; u <= oddInput; u++){
        if(u % 2 != 0){
            oddList.push(u)
        }
    }
    console.log(oddList)
}

oddArr(50);

//  Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
//  For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2.
//  (There are two values in the array greater than 3, which are 5, 7).

function moreThanY(yList, yValue){
    var yArr = [];
    for (var n = 0; n <yList.length; n++){
        if (yList[n] > yValue){
            yArr.push(yList[n]);
        }
    }
    console.log(yArr.length);
}

testList = [1, 3, 5, 7];
moreThanY(testList, 3);


//  Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.
//  (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(sqArr){
    for (var s = 0; s < sqArr.length; s++){
        sqArr[s] = sqArr[s]**2;
    }
    console.log(sqArr);
}

sqList = [1,5,10,-2];
square(sqList);


//  Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
//  When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function negative(negArr){
    for (var q = 0; q < negArr.length; q++){
        if (negArr[q] < 0){
            negArr[q] = 0;
        }
    }
    console.log(negArr);
}

negList = [1,5,10,-2];
negative(negList)

//  Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the 
//  maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(ranArr){
    finalArr = [];
    var sumRanArr = 0;
    maxItem = ranArr[0];
    minItem = ranArr[0];
    for(var w = 0; w <ranArr.length; w++){
        if(ranArr[w] > maxItem){
            maxItem = ranArr[w];
        }
        else if(ranArr[w] <= minItem){
            minItem = ranArr[w];
        }
        sumRanArr += ranArr[w];
    }
    finalArr.push(maxItem, minItem, sumRanArr/ranArr.length);
    console.log(finalArr);
}

ranList = [1,5,10,-2];
maxMinAvg(ranList);


//  Swap Values - Write a function that will swap the first and last values of any given array.
//  The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapValues(swapArr){
    var first = swapArr[0];
    swapArr[0] = swapArr[swapArr.length-1];
    swapArr[swapArr.length-1] = first;
    console.log(swapArr);
}

newTestList = [1,5,10,-2];
swapValues(newTestList);


//  Number to String - Write a function that takes an array of numbers and replaces any negative values 
//  within the array with the string 'Dojo'. 
//  For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numToString(numList){
    for(var f = 0; f<numList.length;f++){
        if(numList[f]<0){
            numList[f] = 'Dojo';
        }
    }
    console.log(numList);
}

testNumList = [-1,-3,2];
numToString(testNumList);