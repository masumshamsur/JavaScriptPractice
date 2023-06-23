
/*Sort and group by occurrence
{1000, 1001, 1002, 1003, 1000, 1000, 1002, 1005, 1006, 1003}
result should be {1000=3, 1001=1, 1002=2, 1003=2, 1005=1, 1006=1}*/

var numArray = [1000, 1001, 1002, 1003, 1000, 1000, 1002, 1005, 1006, 1003]

var count={};

for(var i in numArray){
    count[numArray[i]]= count[numArray[i]]? count[numArray[i]]+1:1
}

console.log(count)