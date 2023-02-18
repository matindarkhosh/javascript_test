//Hello world
console.log("I'm javascript");
//variabels
const name = "John";
let admin;
admin = name;
console.log(admin);
//propt alert
// let proptTest = prompt("what is your name?")
// alert(proptTest);
//operators
let a=1 , b=1;

let c = ++a;// => 2
let d = b++;// => 2

//if else

let result;

if(a + b < 4){
    result = "below";
    console.log(result);
} else{
    result = "over";
    console.log(result)
};

//rewrite
let result2 = (a + b > 4) ? console.log("below") : console.log("over");

//for

for(let i=0; i < 5;){
    i++;
    console.log(i);
}

//do while
let x = 0;

do{
    console.log(x);
    x++;
}while(x < 3);

//switch
let browser = "pin";

switch(browser){
    case "chrom" :
        console.log("you use of chrom browser")
        break;
    case "firfox" :
        console.log("you use of firfox browser")
        break;
    case "edge" :
        console.log("you use of edge browser")
        break;

    default :
        console.log("we can not support of your browser ")

}

//function
function checkAge (age){
    if(age >= 18){
        console.log(true)
    }else{
        console.log("Did parents allow you?")
    }
}
checkAge(19);
checkAge(14);

//arrow function
// function ask(question, yes, no) {

//     if (confirm(question)) yes();
//     else no();

//   }
  
//   ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
//   );

//object

let user = {};

user.name2 = "John";
user.surname = "Smith";
user.name2 = "Pete";
delete user.name2;

//Date
const user79 = new Date();
console.log(user79.getMonth());

//Random
let random = Math.random() *3;
console.log(Math.floor(random));

//Math function

// let firstNumber = +prompt("Enter first number");
// let seccondNumber = +prompt("Enter seccond number");

// alert(firstNumber +++ seccondNumber);

//array
const Country = ["Iran", "Germany", "Canada"];
Country.push("Brazil");
Country.push("India");
Country.pop();

Country.unshift("USA");
Country.unshift("France");
Country.shift();

delete Country[1];

console.log(Country);

//Map

const map = new Map();

map.set(1 , "jack");
map.set(2 , "john");
map.set(3 , "mikel");

console.log(map.get(1));
console.log(map.size);

//Destructuring

let user2 = {
    name : "John",
    years: 17,
}

let {name:name2 , years:age , isAdmin = false } = user2;
console.log(name2);

//Date
let now = new Date();
console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);

//Json

let user3 = {
    name: "ali",
    age: 17,
    job: "programmer"
}

let jsonTest = JSON.stringify(user3);
console.log(jsonTest);

//setTimeout and setInterval
function sayname(){
    console.log("Jack")
}
setTimeout(sayname, 3000);
setInterval(sayname, 5000);

