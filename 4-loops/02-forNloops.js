//for in loops iterate over values in an object
//properties in an object are "enumerable properties"

let student={
    name: 'Michael',
    awesome: true,
    degree: 'javascript',
    week: 1,
}

for (let item in student) {
    console.log(`${item}: ${student[item]}`);
}

let catArray=[`tabby`, `british shorthair`, `burmese`, `maine coon`, `rag doll`];
for(let cat in catArray){
    console.log(catArray[cat]);
}
let name='spOngeNob';
let out;

for(let index in name){
    console.log(index, index);
    ((Number(index))===0) ? out=name[Number(index)].toUpperCase():out+=name[index].toLowerCase();
}
console.log(out);
console.log(out[0]);