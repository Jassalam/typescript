"use strict";
exports.__esModule = true;
// use of var keyword
var num1 = 1;
function varDeclaration() {
    var num2 = 2;
    if (num2 > num1) {
        var num3 = 3;
        num3++;
    }
    while (num1 < num2) {
        var num4 = 4;
        num1++;
    }
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
}
varDeclaration();
// use of let keyword
var n1 = 1;
function letDeclaration() {
    var n2 = 2;
    if (n2 > n1) {
        var n3 = 3;
        n3++;
    }
    while (n1 < n2) {
        var n4 = 4;
        n1++;
    }
    console.log(n1); //OK
    console.log(n2); //OK 
    console.log(n3); //Compiler Error: Cannot find name 'n3'
    console.log(n4); //Compiler Error: Cannot find name 'n4'
}
letDeclaration();
// const keyword
var num = 100;
console.log(num);
var number1;
number1 = 200;
console.log(number1);
