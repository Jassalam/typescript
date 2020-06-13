export {}

let num: number = 100; // variable declaration 
console.log(num);

// variable hoisting

let x: number = 5;
let sum: number = x + y ;
console.log ('Sum of X and Y = ' + sum);

let y: number = 10;    // generate error as y is not declare before usage.



function hoistVar(){
    let a;
    console.log(a);
    a = 20;
    
    }

    hoistVar();
