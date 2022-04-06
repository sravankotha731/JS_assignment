/* Write a JavaScript program to compute the absolute difference between a specified number and 19. 
Returns triple their absolute difference if the specified number is greater than 19.*/

function difference(){
    let n = document.getElementById("Q4").value;
    if(n<=19){
        document.getElementById("A4").innerHTML= Math.abs(n-19)
    }
    else{
        document.getElementById("A4").innerHTML= Math.abs((19-n)*3)
    }
}