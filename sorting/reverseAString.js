
var str= "masumrahman";
var rstr= '';

for(var i=0; i<str.length; i++){
    rstr= str[i]+rstr;
}
console.log(rstr);



//  making reverse string with functon

function reverseAstring(str){
    var rstr= "";
    for(var i=0; i<str.length; i++){
        rstr=str[i]+rstr;
    }
    return rstr;
}
console.log("reverse string- "+reverseAstring(str));



