/*
* insert 冒泡排序
* @parameter
* ary:[array] 需要实现排序的数组
* @return
* [array] 排序后的数组(升序)
* by team on 20171020
* */
var ary = [12,15,14,17,21,19,20];
function insertNum(ary){
    var handAry = [];
    handAry.push(ary[0]);
    for (var i = 0; i < ary.length; i++) {//外面循环是依次要从数组获取的数。
        var cur = ary[i];
        for (var j = handAry.length-1; j >= 0; j--) {//里层循环是从数组中获取的数和新数组中数的依次比较。
            if(cur > handAry[j]){
                handAry.splice(j+1,0,cur)//如果新获取的这个数，比新数组的其中某一项大，就将获取的这个数放在
                //新数组这一项的后面，同时结束比较。
                break;
            }
            if(j===0){
                handAry.unshift(cur);
            }
        }
    }
    return handAry;
}

console.log(insertNum(ary));