//任意数求和方法扩展
function fn(){
    var ary=Array.prototype.slice.call(arguments);//将类数组转换成数组。
    return eval(ary.join('+'));
}
fn(12,23,34,45,56);