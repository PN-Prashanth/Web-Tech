0// // 1 using string

// // single quote
// let insti='pysp'                              
// console.log('institute name',insti)


// // double quote
// let fruit="mango"
// console.log('fruits name',fruit)


// // back ticks
// let area=`basavangudi`
// console.log('areas name',area)

// // using backticks 
// console.log(`name of institute`,insti)

// console.log("type of insti",typeof insti)



// 2  number

let num=12333333333333335
console.log("even number",num)
console.log("typr",typeof num)


let num1=3.012
console.log("odd number",num1)


// 3 bigint datatype

let bigint =("1111111111111111254899")
console.log("big number",bigint)
console.log("tyyyyyy",typeof bigint)

let bigint2=11111111115243
console.log("big num",bigint2)
console.log("tyyyyyy",typeof bigint2)



// 4  undefined


let salary
console.log("salary is",salary)
console.log("type of salaryyyy",typeof salary)

salary=20000
console.log("salary is ",typeof salary)

salary="google pay"
console.log("salary is ",typeof salary)


salary=true
console.log("salary is ",typeof salary)


//  5 boolean datatye

const a=10
const b=20
console.log("if a>b",a>b)
console.log("if a<b",a<b)
console.log("type of",typeof (a>b))



// 6 null datatype

let age=null
console.log("if null",age)
console.log("if null",typeof age)


// 7  object datatype


let   psp ={
    head : "irshan",
    rainers : 6,
    staff : 10,
    IsOfftoday: false,
    holiday : "no holiday",
    fees : 35000.10
}
console.log("is let",psp)
console.log('head of psp',psp.head)
psp['holiday'] = 'dont ask'
console.log(psp)
psp['location'] = 'basavangudi'
console.log(psp)
delete (psp.fees)
console.log(psp)

