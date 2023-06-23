
var numArr= [4,3,5,4,6,2,5,7,3];
var count ={};

//for(let i=0; i<numArr.length; i++){
for(let i in numArr){
    //console.log(numArr[i])
    //var num= numArr[i];

    //count[num]=count[num] ? count[num] +1 : 1;
    count[numArr[i]]=count[numArr[i]]? count[numArr[1]]+1 : 1;
}
console.log(count);