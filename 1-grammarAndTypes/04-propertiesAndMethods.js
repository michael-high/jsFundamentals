//Properties are qualities related to a data type  data.property
//Methods are actions that can be performed on a data type  data.method()

//each data type has its own properties and methods, but some are shared

let myName='Michael';
let x=myName.length;
console.log(myName, 'is', x, 'characters long.');

let name2='Jehosophat';
let out0= name2.toUpperCase();
console.log(name2.toUpperCase());

let home="whereTheHeartIs";
let v= home.includes('wife');
console.log(v);
if(v==false){
    print('you heartless beast')
}
else{print('you homebound loser')};

let sent="This sentence will be split into individual parts"
console.log(sent.split(" "));
let words=sent.split(" ");
let byis=sent.split('i');
let chars=sent.split('');
//console.log(words, byis, chars);

function print(out){
    console.log(out);
}

print(v);

