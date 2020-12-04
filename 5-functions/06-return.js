//return statements 
//yay
//this is useful

function yolo(later){
    console.log(later);
    return later;
}
//Only allowed to return 1 thing

yolo(`fools`);
console.log(yolo(`fools`));

//concise body arrow functions return values by default

let name=lastName=> lastName;

let ret=name(`hola`);
console.log(ret);