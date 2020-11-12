// Predict 1
for(var num = 0; num < 15; num++){
    console.log(num);
}

// Answer 1:  prints every number starting with 0 and ending on 14

// Predict 2
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

// Answer 2:  prints 3, 9

// Predict 3
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

//Answer 3: prints 1, 4, 5, 8, 10, 11, 14, 16  

