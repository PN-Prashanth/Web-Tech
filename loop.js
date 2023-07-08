//  let prompt = require('prompt-sync')({sigint:true})
// let n=prompt("enter n:")
// for (let a=1; a<=n;a++){
//     console.log(a)
// }

// 2 
// let prompt = require('prompt-sync')({sigint:true})
// let n=prompt("enter n:")
// let ans =' '
// for (let a=1; a<=n;a++){
//     ans += a + ' '
// }
//     console.log(ans)



// // 3.print even no and odd number
// // let prompt = require('prompt-sync')({sigint:true})
// // let n=prompt("enter n:")
// // even="even no 1 to 50:"
// // odd="odd no 1 to 50 :"
// // for (let a=1; a<=n;a++){
// //     if (a%2==0) 
// //     even+=a+" "
// // else
// //     odd+=a+" "    
    
// // }
// //     console.log(even)
// //     console.log(odd)




// // 4. for in loop
// // let state ={
// //     karnataka:'bengaluru',
// //     tamilnadu:'chennai',
// //     andra:'amaravathi',
// //     kerala:'tiruvanthapuram'
// // }
// // // console.log(state["karnataka"])
// // // console.log("state",state)

// // for(elements in state){
// //     // console.log("capital of",elements,state[elements])

// //     console.log(`capital of ${elements} is ${state[elements]}`)
// // }




// //   let prompt = require('prompt-sync')({sigint:true})
// //   let n=prompt("enter n:")

// // let state ={
// //     karnataka:'bengaluru',
// //     tamilnadu:'chennai',
// //     andra:'amaravathi',
// //     kerala:'tiruvanthapuram',
// //     maharastra:'mumbai'
// // }
// // for(elements in state){
// //     console.log(`capital of ${elements} is ${state[elements]}`)
// // }



// // let prompt = require('prompt-sync')({sigint:true})
// //  let n=prompt("enter n:")
// // let state={}
// // let a
// // let b 
// // for (let i=1;i<=n;i++){
// //     a=prompt("enter the state:")
// //     b=prompt("enter the capital:")
// //     state[a]=b
// // }

// // for (let i in state){
// //     console.log("the capital of ",i,"is",state[i])
// // }




// //3 while loop

// let prompt = require('prompt-sync')({sigint:true})
// let n = prompt("enter n:")
// let z=1
// while(z<=n){
//     z++
//     console.log(z)
  
// }


// // do while loop condition

let prompt = require('prompt-sync')({sigint:true})
let n = prompt("enter n:")
let j=1
let fact =0
do{
    fact *=j
    j++
}while(j<=n)
console.log("sum of 1 to n :->",fact)
    


























