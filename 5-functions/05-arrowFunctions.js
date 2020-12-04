//more concise way of writing a function expression
//NOT A FUNCTION DECLARATION
//function expressions are not hoisted; must be in the code above where the are used
//also called fat-arrow functions


//block body arrow function
let hi=()=>{
    console.log(`hello world`);
}

hi();


//concise body arrow function
let hey=()=> console.log(`wassup`);
hey();

//with a single paramenter, perentheses arent required
//parentheses are required for 0 parameters or 2++ paremeters
let apples=number=>console.log(`there are ${number} apples`);

apples(15);
