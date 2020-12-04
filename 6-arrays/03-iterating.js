
let x=[0,1,2,3,4,5];

for(let i=0; i<x.length; i++){
    console.log(x[i]);
}

x.forEach(function(xitem){
    console.log(xitem);
})
x.forEach(xitem=>console.log(xitem));

for(let i=0; i<x.length; i++){

}

let y=[2,3,4,2,14,8,9];

y.forEach((yitem, index)=> console.log(yitem, index));
