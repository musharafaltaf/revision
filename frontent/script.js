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

let num = 3438743
if (num%2 === 0){
    console.log("even")
}else{
    console.log("odd")
}