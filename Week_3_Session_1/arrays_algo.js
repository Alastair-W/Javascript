// Print Values and Sum

var testArr = [6,3,5,1,2,4];

var sum = 0;
for (var num = 0; num < testArr.length; num++){
    sum += testArr[num];
    console.log("Num "+testArr[num], ", Sum "+sum)
}


// Value * Position

for (var x = 0; x < testArr.length; x++){
    var product = x * testArr[x];
    testArr[x] = product;
}
console.log(testArr)