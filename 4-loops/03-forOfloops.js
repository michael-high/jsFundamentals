//for of loops
//looks at iterable properties of things like arrays

let student={
    name: 'Michael',
    awesome: true,
    degree: 'javascript',
    week: 1,
}

//for (let item of student) {
//    console.log(`${item}: ${student[item]}`);
//}THIS DOESNT WORK bc for of loops dont work on objects, they require iterable properties while objects are enumerable

let catArray=[`tabby`, `british shorthair`, `burmese`, `maine coon`, `rag doll`];
for(let cat of catArray){
    console.log(cat);
}