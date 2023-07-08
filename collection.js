// 3 type of collection 1 object 2 array 3 string
// let num = [10,20,30,40]
// console.log("num of array",num)

// hetrogeneous
// let array = [1,'hello',10.2,true]
// console.log("type of array",typeof array)    
// console.log("num of arrya",array)


// finding the length of array
const fruit = ['mango','apple','butterfruit','orange','graps','banana','avakoda']
console.log("length of fruit==>",fruit.length)


// feching value based on index
// console.log(fruit[0])
// console.log(fruit[5])
// console.log(fruit[8])

// arry doesnot support indexing
// console.log(fruit[-5])


// for (i in fruit){
//     console.log(fruit[i])
// }

// changing\adding elements of array

fruit[4]=111
console.log(fruit)

// deleting array

delete fruit[3]
console.log(fruit)

// one more type
// for(i in fruit){
//     if(typeof fruit[i] === 'number'){
//         delete fruit[i]
//     }
// }
// console.log(fruit)

// adding deleting array
for(i in fruit){
    if (typeof fruit[i] ==='number'){
        console.log("deleted elements ==>",fruit[i])
        delete fruit[i]
    }
}













