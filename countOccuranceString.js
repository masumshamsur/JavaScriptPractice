
var str="hello world";

var strArr=str.split( );
console.log(strArr);

for(let i=0; i<strArr.length; i++){
    //for(let i in strArr){
    //console.log(numArr[i])
    var num= strArr[i];

    count[num]=count[num] ? count[num] +1 : 1;
}
console.log(count);
