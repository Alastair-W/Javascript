// #1

function a(){
    return 35;
}
console.log(a())

console.log("Result #1 = 35");

// #2

function b(){
    return 4;
}
console.log(b()+b());

console.log("Result #2 = 8");

// #3
function c(d){
    return d;
}
console.log(c(2)+c(4));

console.log("Result #3 = 6");

// #4
function e(f){
    console.log(f);
    return f*3;
}
console.log(e(3));

console.log("Result #4 = 3, 9");

// #5
function g(h){
    return h*4;
    console.log(h);
}
console.log(g(10));

console.log("Result #5 = 40");

// #6

function i(j){
    if(j<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(j);
}
console.log(i(15));

console.log("Result #6 = 4");


// #7

function k(l,m){
    return l*m;
}
console.log(10,3);
console.log(k(3,10) );

console.log("Result #7 = 10, 3, 30");

// #8

function n(o){
    for(var p=0; p<10; p++){
        console.log(p);
    }
    return p;
}
console.log(3);
console.log(4);

console.log("Result #8 = 3, 4");

// # 9

function q(){
    for(var r=0; r<10; r++){
        r = r+2;
        console.log(r);
    }
}
q();

console.log("Result #9 = 2, 5, 8, 11");

// #10

function s(t,u){
    for(var v=t; v<u; v++) {
        console.log(v);
    }
    return t*u;
}
s(0,10);
console.log(s(0,10));

console.log("Result #10 = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0");


// #11

function w(){
    for(var x=0; x<10; x++){
        for(var y=0; y<10; y++){
            console.log(y);
        }
    console.log(x);
    }
}

console.log("Result #11 = 0 - 9 is printed 9 times (but function not called so nothing would happen)");

// # 12

function z(){
    for(var aa=0; aa<10; aa++){
        for(var bb=0; bb<10; bb++){
            console.log(aa,bb);
        }
        console.log(bb,aa);
    }
}

console.log("Result #12 = 0,0 up to 0,9, then 9,0, then 1,0 up to 1,9, then 9,2 and so on (but function not called....)");

// # 13

var cc = 10;
function dd(){
    var cc = 15;
    console.log(cc);
}
console.log(cc);

console.log("Result #13 = 10");

// # 14

var ee = 10;
function ff(){
    var ee = 15;
    console.log(ee);
}
ff();
console.log(ee);

console.log("Result #14 = 15, 10");

// # 15

var gg = 10;
function hh(){
    var gg = 15;
    console.log(gg);
    return gg;
}
gg = hh();
console.log(gg);

console.log("Result #15 = 15, 15");