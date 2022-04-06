/*Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.*/ 
function substring(){
    let x = document.getElementById("Q7").value
    let str = x.split(" ")
    let result = str[0]
    for(var i=0;i<str.length;i++){
        if(str[i].length>result.length){
            result=str[i]
        }
    }
    document.getElementById("A7").innerHTML = result
}