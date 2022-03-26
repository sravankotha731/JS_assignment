//Write a JavaScript program to compute the absolute difference between a specified number and 19. 
//Returns triple their absolute difference if the specified number is greater than 19.

function difference(n){
    if(n<=19){
        return(Math.abs(n-19))
    }
    else{
        return Math.abs((19-n)*3)
    }
}
console.log(difference(20))