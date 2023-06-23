const fruits=['apple', 'banana', 'mango', 'chreey']
//fruits.sort();
console.log('Original array- '+fruits);

fruits.sort();
console.log('Sorted array- '+fruits);

fruits.reverse();
console.log('Sorted array- '+fruits);

let tmp=[];
for(i=0; i<fruits.length; i++){
    for(j=i+1; j<fruits.length; j++){
        if(fruits[i]>fruits[j]){

        tmp=fruits[i];
        fruits[i]=fruits[j]
        fruits[j]=tmp
    }
    }
}
console.log(fruits)

//var numArr=[3, 5, 2, 7, 4, 9, 8];

function sortArray(numArr){
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

console.log("New sorting- "+sortArray([3, 5, 2, 7, 4, 9, 8]))