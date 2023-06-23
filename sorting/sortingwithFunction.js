
//sorting assending order

var numArr=[10, 5, 2, 7, 4, 9, 8];
var strArr= ['apple', 'banana', 'mango', 'chreey'];

function sortArrayascending(numArr){
    var tmp=[];
for(var i=0; i<numArr.length; i++){
    for(var j= i+1; j<numArr.length; j++){
      if(numArr[i]>numArr[j]){

        tmp=numArr[i];
        numArr[i]=numArr[j];
        numArr[j]=tmp;
      }
    }
}
return numArr
}

console.log("New sorting accending- "+sortArrayascending(numArr));
console.log("New sorting accending- "+sortArrayascending(strArr));




//sorting decending order

function sortArraydescending(numArr){
    var tmp=[];
for(var i=0; i<numArr.length; i++){
    for(var j= i+1; j<numArr.length; j++){
      if(numArr[i]<numArr[j]){

        tmp=numArr[i];
        numArr[i]=numArr[j];
        numArr[j]=tmp;
      }
    }
}
return numArr
}

console.log("New sorting decnding- "+sortArraydescending(numArr));
console.log("New sorting decnding- "+sortArraydescending(strArr));
