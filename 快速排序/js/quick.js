//实现递归
//var num = [1,2,3,4,5,6,7,8,9,10];
function fn(num){
    if(num>10){
        return 20;
    }
    if(num%3===0){
        return num + fn(num+1);
    }
    return fn(num+1);
}
var result = fn(1);
console.log(result);
