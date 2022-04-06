//Write a JavaScript program to sort the items of an array.

let bbsort = ()=>{
    let x = document.getElementById("Q8").value;
    let arr1=x.split(" ")
    let arr=[]
    for(let i=0;i<arr1.length;i++){
        arr[i]=parseInt(arr1[i])
    }
    for(var i =0;i<arr.length;i++){
        for(var j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    document.getElementById("A8").innerHTML = arr
    //console.log(arr)
}
//bbsort([0,9,8,10,1,2,-1])