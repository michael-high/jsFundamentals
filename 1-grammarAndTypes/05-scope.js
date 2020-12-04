//Scopes
//the position of a variable, etc in relation to the whole code

//global scope
let global;

//local scope
function scopeShow(){
    let local=3;
    console.log(local, global);
}
console.log(local, global);
let local=2;
console.log(local, global);