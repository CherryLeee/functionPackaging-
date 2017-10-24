function sum(){
    var total = null;
    for (var i = 0; i < arguments.length; i++) {
        var cur = Number(arguments[i]);//将每一次获取到的实参转换成number类型的
        if(!isNaN(cur)){
            total += cur;
        }
    }
    return total;
}
var sumTotal = sum(10,20,'30');
console.log(sumTotal);