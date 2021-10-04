function BubbleSort(arr){
    var i, j;
    var len = arr.length;
    for(i=0;i<len;i++){
        for(j=0;j<len;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[i];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr)
}
let arr = [1,12,3,45,67,89,65,34,12]
BubbleSort(arr)
//-------------------------------------------------
var numArray = [50,5,80,95,2,4,1];
for (var i = 0; i < numArray.length; i++) {
    var target = numArray[i];
    for (var j = i - 1; j >= 0 && (numArray[j] > target); j--) {
        numArray[j+1] = numArray[j];
    }
    numArray[j+1] = target
}
console.log(numArray);
