//falsy value:
//A value that is considered false when encountered in a Boolean context
//there are 6 cases
//False
//Zero(or any number)
//String '' "" ``
//Null
//Undefined
//NaN

//for the above, when evaluated as a boolean, they return false
function print(out){
    console.log(out);
}

let x=true;
if(x==true){
    print('was true');
}
if(x)print('still true');