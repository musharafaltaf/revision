console.log("hello world")
console.log("wakeens kya chuk kara")
console.log("hello bhaisahab")


console.log(5+3);
console.log("5"+3);
console.log("5"-3);



let person ={
    name : "musharaf",
    fathers_name:"altaf hussain dar",
    mothers_name:"hajira begum",
    subject : "javascript",
    class: "2nd year",
    age : 21

}
console.log(person.subject);

let selectcolors = ["red","yellow","black"]
selectcolors[3]="white";
console.log(selectcolors.length);


function greet(name) {
    console.log("hello " + name);
}
greet('musharaf');

function greet(aa){
    console.log("cxe kyu kara "+ aa);
}
greet('musharafa')


let a = 10;
let b = 20;
let operations = "+";
let result;

if (operations === "-"){
    result = a-b;
} else if (operations === "+"){
    result = a+b;
} else if (operations === "*"){
    result = a*b;
} else if (operations === "%"){
    result = a%b;
} else {
    console.log("invalid operations");
}
console.log(result);


function calculator(a,b,op){
    a : 30;
    b : 40;
    op : "*";
    result;

    
}
if(op === "+"){
    result=a+b;
} else if (op ==="-"){
    result = a-b;
} else if (op === "*"){
    result = a*b;
} else {
    console.log("invalid op")
}
console.log(result)
