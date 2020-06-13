export{}
// use of var keyword
var num1:number = 1; 
    
function varDeclaration() { 
    var num2:number = 2; 

    if (num2 > num1) { 
        var num3: number = 3;
        num3++; 
    } 

    while(num1 < num2) { 
        var num4: number = 4;
        num1++;
    }

    console.log(num1); 
    console.log(num2);  
    console.log(num3); 
    console.log(num4); 
}

varDeclaration();

// use of let keyword
let n1:number = 1; 
    
function letDeclaration() { 
    let n2:number = 2; 

    if (n2 > n1) { 
        let n3: number = 3;
        n3++; 
    } 

    while(n1 < n2) { 
        let n4: number = 4;
        n1++;
    }

    console.log(n1); //OK
    console.log(n2); //OK 
    console.log(n3); //Compiler Error: Cannot find name 'n3'
    console.log(n4); //Compiler Error: Cannot find name 'n4'
}

letDeclaration();


// const keyword

const num: number = 100;
 console.log(num);

 const number1: number;
 number1 = 200;
console.log(number1);

