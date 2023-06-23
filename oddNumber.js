

//finding odd number with array and for loop
var ourArr=[];
for(var m=1; m<20; m+=2){
    ourArr.push(m);
}
console.log("odd arrary element- "+ourArr);


//finding odd number with for loop only
for(var i=0; i<20; i++){
    if(i%2!=0){
        console.log(i);
    }
}