 // alert("DAY 1 of js")
 
let myProfile = {  // we can use const as well
    name :  "Musharaf Altaf",
    fathersName : "Altaf Hussain Dar",
    isMuslim : true,
    course : "bca",
    Mur : 2401630,
    from: "kashmir"
}
console.log(myProfile)
console.log(myProfile.isMuslim)
console.log(myProfile.name)
console.log(myProfile["course"])

console.log(" there are there methods to create a variables such as VAR , LET , CONST. from now we will use only these two varibles let and const because var is older,  ")
console.log("DATA TYPES there are 7 data types in js (premitive data types) are STRING,NUMBER,BOOLEAN,UNDEFINED,BIGINT,SYMBOL, NULL ")

let a = 10;
let b = 20;
console.log(a+b)

let age = 17;
if(age >= 18){
    console.log("you can vote")
} else {
    console.log("cxa chuk shur wunii")
}

let darkMode = "white";
if(darkMode === "black"){
    console.log("black")
} else{
    console.log("please select any option there")
}

let color;
let mode = "darkMod";
if(mode === "darkMode"){
    console.log("black")
} else{
    console.log("white")
}

let num = 12
if (num%2 === 0){
    console.log("even")
}else{
    console.log("odd")
}

const word = "helloMusharaf";
for(i=0;i<word.length;i++){
    console.log(word[i])
}
let words = "banana";
let count = 0;
for(i=0;i<words.length;i++){
    if(words[i] === "a"){
        count++;
    } 
}
console.log(count)

let character = "farahsum";
let reversed = "";

for(let i = character.length -1; i>=0; i--){
    reversed += character[i];
}
console.log(reversed)

let wordS = "MADAM";
let reverseds = "";

for (let i = wordS.length - 1; i >=0; i--){
    reverseds += wordS[i]
}
if (wordS === reverseds){
    console.log(wordS, "is a Palindrome")
} else{
    console.log(wordS, "is not a Palindrome")
}

let Word = "helloooo";
for (let char of Word){
    console.log(char)
}


let text = "musharaf";
let vowels = "aeiou";
let Count = 0;

for (let char of text){
    if(vowels.includes(char)){
        Count++;
    }
}
console.log("in this word","'",text,"'","there are", Count, "vowles")


let WORD = "hello";
let result = "";

for (i=0; i < WORD.length; i++){
    let ch = WORD[i];

    let uppercase = String.fromCharCode(ch.charCodeAt(0)-32);

    result += uppercase;
}
console.log(result)


// functions

function greet(){
    console.log("hello")
}
greet()


function Dar(name){
    console.log("hello",name)
}
Dar("musharaf")

function number(a,b){
    return a+b;
}
let results = number(3,4)
console.log(results)


function findVowels(word){
    let vowels = "aeiou";
    let count = 0;

    for (let char of word){
        if(vowels.includes(char)){
            count++
        }
    }
    return count;
}
console.log(findVowels("javascript"))


//arrow function
let n = 1;
const add = (n) =>{
    if (n % 2 === 0){
        return "even";
    } else{
        return "odd";
    }
};

let numbers = [1,2,3,4,5,];
const squares = numbers.map(n => n * n)
console.log(squares)

const letsadd = (a,b) => a+b;


let numberslist = [1,2,3,4,5,6,7,7,]

const multiply = numberslist.map( (n) => n*2)
console.log(multiply)
const evens = numberslist.filter( (n) => n % 2 === 0)
console.log(evens)

const addt = numberslist.reduce((total,n) => total + n,0)
console.log(addt)

const apple = numberslist.map((p) => p*1.1)
console.log (apple)

const apples = numberslist.reduce((p) => p > 2.2)
console.log(apples)