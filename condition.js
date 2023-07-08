// 1.if condition
// let num=90
// if(num>50){
//     console.log("enter number is biggest")

// }


//2. if  else condition

// let prompt = require("prompt-sync")({sigint:true})
// let num=prompt ("enter the number :->")
// if (num>0) {
//     console.log("enter number is positive")
    
// } 
// else {
//     console.log("enter number is negative")
    
// }


// 3.else if condition


let prompt = require("prompt-sync")({sigint:true})
let age=prompt ("enter the age :->")
if (age>0 & age<18) {
    console.log("you are  child")
    
} 
else  if(age>=18 & age<=40){
    console.log("your are young")
    
}
else  if(age>=40 & age<=80){
    console.log("your are senior")
}
else{
    console.log("your god")

}