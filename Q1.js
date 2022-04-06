// Write a JavaScript program to compute the sum of an array of integers.

let sumOfArray = () => {
    let sum=0
    let x = document.getElementById("Q1").value;
    let arr1=x.split(" ")
    let array=[]
    for(let i=0;i<arr1.length;i++){
        array[i]=parseInt(arr1[i])
    }
    //let array = [1,2,3,4,5]
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    document.getElementById("A1").innerHTML= sum

}
//sumOfArray()