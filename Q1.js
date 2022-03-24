// Write a JavaScript program to compute the sum of an array of integers.

//Method 1 --- > computed using for loop
let sum =0
let array = [1,2,3,4,5]
for(let i=0;i<array.length;i++){
    sum+=array[i]
}
console.log("Sum of an array of integers : " + sum)

// Method 2 --- > using key wording .reduce
let sum1 = array.reduce((a,b)=>a+b)
console.log(sum1)