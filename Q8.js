//Write a JavaScript program to sort the items of an array.

let bbsort = (arr)=>{
    for(var i =0;i<arr.length;i++){
        for(var j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}
bbsort([0,9,8,10,1,2,-1])