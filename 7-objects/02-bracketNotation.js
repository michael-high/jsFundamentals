//bracket notation can be used with objects to pull out values jut like an array
//useful for storing new keys in an object and then referencing them later on

let garden={
    vegetable:`carrot`,
    flower:`sunflower`,
    water:true,
    sun:true,
    size:10

}
let test=Object.keys(garden);
console.log(test)
console.log(typeof test[0]);
console.log(typeof test);

let beet=garden[`vegetable`];
let carrot=garden['vegetable'];
let baking={};
baking[`carrot`]=`make cake`;
console.log(carrot);
console.log(beet);
console.log(baking);

console.log(baking[garden[`vegetable`]]);
//use square bracket[] when you cant use dot notation to move through an object

let testObj={
    "Spaces Here": true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj["Spaces Here"]);