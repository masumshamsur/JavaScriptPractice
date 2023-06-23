const fruits=['apple', 'banana', 'mango', 'chreey']
//fruits.sort();
console.log('Original array- '+fruits);


let tmp
for(i=0; i<fruits.length; i++){
    for(j=i+1; j<fruits.length; j++){
        if(fruits[i]>fruits[j])

        tmp=fruits[i];
        fruits[i]=fruits[j]
        fruits[j]=tmp
    }
}
console.log(fruits)