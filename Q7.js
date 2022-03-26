/*Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.*/ 
function substring(str){
    var str = str.split(" ")
    var result = str[0]
    for(var i=0;i<str.length;i++){
        if(str[i].length>result.length){
            result=str[i]
        }
    }
    console.log(result)
}
substring("Kotha Sravan Saikumar")