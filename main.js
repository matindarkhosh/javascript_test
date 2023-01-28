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

//experssion
