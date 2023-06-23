
//with for loop only

for(var i=0; i<20; i++){
    if(i%2==0){
      console.log(i);
    }
}

//with array and for loop

myArray=[];
for(var j=0; j<20; j+=2){
    myArray.push(j);
}
console.log("evenNumber "+myArray);


//from given array

var ourArr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(n=0; n<=ourArr.length; n++){
    if(ourArr[n]%2==0){
        console.log(ourArr[n]);
    }
}