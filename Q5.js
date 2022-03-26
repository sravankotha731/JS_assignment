/*Write a JavaScript program to create a new string adding "Py" in front of a given string. 
If the given string begins with "Py" then return the original string. */

function add_string(str){
    let str1 = str.toLowerCase()
    if(str1.substring(0,2)==="py"){
        return str
    }
    else{
        return "Py"+str
    }
}
console.log(add_string("pipe"))