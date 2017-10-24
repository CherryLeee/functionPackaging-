/*
* bubble:冒泡排序
* @parameter
* ary:[array]需要实现排序的数组
* @return
* [array]排序后的数组[升序]
* by team on 2017/10/20
* */
var ary = [1,3,2,6,4,8,10];
function bubble(){
    for (var i = 0; i < ary.length-1; i++) {
        //外轮循环表示要比较的轮数
        for (var j = 0; j < ary.length-1-i; j++) {
            //内轮循环表示的每一轮要表示的次数
            if(ary[j]>ary[j+1]){//如果前一项比后一项大的话，交换位置。
                var mod = ary[j];
                ary[j] = ary[j+1];
                ary[j+1] = mod;
            }
        }
    }
    return ary;
}
console.log(bubble(ary));