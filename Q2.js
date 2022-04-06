//Write a JavaScript program to get the first n Fibonacci numbers

let Fibonacci = ()=>{
    let n = document.getElementById("Q2").value;
    let a=0
    let b=1
    let c 
    let array = [a,b]
    for(let i=2;i<n;i++){
        c=a+b
        a=b
        b=c
        array[i]=c
    }
    document.getElementById("A2").innerHTML= array
}