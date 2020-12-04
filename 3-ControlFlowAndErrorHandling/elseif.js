function print(out){
    console.log(out);
}

let myName='Michael';

let name1="lol";

if(myName==name1){
    print('Hello, my name is '+myName);
}
else{
    print('Is your name '+ name1+"?");
}

let age=7;

if(age>24){
    print('you can rent a car!');
    print('you can drink!');
    print('you can vote!');
}else if(age>20){
    print('you can drink!');
    print('you can vote!');
}else if(age>17){
    print('you can vote!');
}else print('ur2yung');

