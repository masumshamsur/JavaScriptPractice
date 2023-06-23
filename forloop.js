let name='masum';
for(let i=0;i<5;i++){
console.log(name);
}


//printing Odd number
for(let i=1; i<10; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

//use of for loop with 'in'

let fruits= ['apple', 'orange', 'mango']
let x;
for (x in fruits){
    console.log(fruits[x])
}
console.log('before adding charry- '+ fruits.length);

fruits.push('cherry');
console.log('\n');
console.log('se of for loop with of');
//use of for loop with 'of'
for(x of fruits){
    console.log(x);
}

console.log('after adding charry- '+ fruits.length);