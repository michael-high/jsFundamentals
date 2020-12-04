let num=6;

//ternary
(num>0) ? console.log(`yes`):console.log(`no`);
// (condition) ?   true:false
//super simple, great stuff

//like if elseif else, the elseifs go in the middle

(num>0) ? console.log(`if`):(num>9) ? console.log(`elseif`):console.log(`else`);

//or
(num>0) ? console.log(`if`):
(num>9) ? console.log(`elseif`):
(num>32) ? console.log(`elseif2`):
console.log(`else`);



function print(out){
    console.log(out);
}
let age=12;
(age>24) ?
    print('you can rent a car! you can drink! you can vote!'):
(age>20)? 
    print('you can drink! you can vote!'):
(age>17) ?
    print('you can vote!'):
 print('ur2yung');