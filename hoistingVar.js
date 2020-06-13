var num = 100; // variable declaration 
console.log(num);
// variable hoisting
var x = 5;
var sum = x + y;
console.log('Sum of X and Y = ' + sum);
var y = 10; // generate error as y is not declare before usage.
function hoistVar() {
    var a;
    console.log(a);
    a = 20;
}
hoistVar();
