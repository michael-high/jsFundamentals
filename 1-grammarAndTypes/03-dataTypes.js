//datatypes:
//boolean:TRUE || FALSE
let jk=false;
//NULL, nadda, non-existo,
let empty=null;

//Undefined
let yolo=undefined;
let yomama; //also undefined

//numbers
let sucker=89.67;
let foggy=0;

//js rounds after 15 digits
//WEAK

//Constructors

let a=Number("123");
//let x=Bullcrap("123");
console.log(a);

//Strings
//datatype used to represent text
//single or double quotes
let string1="yolo";
let string0=' mama';

//string concatonation
let string2=string1+string0;
console.log(string2);
console.log(typeof string0);

//Datatype coercion
let string3=1050+'200';
console.log(string3);

//OBJECTS
//store many values under one data type
//denoted by curly braces {}

let sandwhich={
    bread:'white',
    cheese:3,
    yummy:true,
};
console.log(sandwhich);

//ARRAYS
//hold lists of other datatypes
//denoted by []
let array1=['what',1,true,3];
console.log(array1)

//petite exercise
let firstName='Michael';
let lastName="High";
let houseNumber=511;
let street='Branning';
let city='Fort Wayne';
let state='Indiana';
let zipcode=46807;
console.log(firstName, lastName, houseNumber, street, city, state, zipcode);