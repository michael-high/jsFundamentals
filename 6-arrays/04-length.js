let r=[0,1,2,3,4];

console.log(r instanceof Array);

function printArr(arr){
    for (let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

//.reverse() flips items in an array to read backwards

function makeReverse(array){
    if(array instanceof Array){
        let out=array.reverse();
        return out;
    }else console.log(`makeReverse has failed`);
}

newArray=makeReverse(r);
printArr(arr);
printArr(newArray);