//Write a JavaScript program to get the first n Fibonacci numbers

let Fibonacci = (n)=>{
    let a=0
    let b=1
    let c 
    console.log(a)
    console.log(b)
    for(let i=2;i<n;i++){
        c=a+b
        a=b
        b=c
        console.log(c)
    }
}
Fibonacci(5)