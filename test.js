function calcu(arr,msg){
    arr[1] = 150;
    msg = "inside";
    console.log(arr[0]+ arr[1]);
    console.log(msg);

}
const arr = [100];
let msg = "outside";
calcu(arr, msg);
console.log(arr[0]+arr[1]);
console.log(msg);