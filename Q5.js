/*Write a JavaScript program to create a new string adding "Py" in front of a given string. 
If the given string begins with "Py" then return the original string. */

function add_string(){
    let str = document.getElementById("Q5").value;
    let str1 = str.toLowerCase()
    if(str1.substring(0,2)==="py"){
        document.getElementById("A5").innerHTML = str
    }
    else{
        document.getElementById("A5").innerHTML = "Py"+str
    }
}