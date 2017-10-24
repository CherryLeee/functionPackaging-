function queryURLParameter(url){
    //url:传递的参数（我们当前要解析的URL地址）
    var quesIndex = url.indexOf('?');
    obj={};
    if(quesIndex===-1){//url中没有问号传参，直接返回空对象
        return obj;
    }
    url = url.substr(quesIndex+1);
    var ary = url.split('&');
    for (var i = 0; i < ary.length; i++) {
        var curAry = ary[i].split('=');
        obj[curAry[0]] = curAry[1];
    }
    return obj;
}
queryURLParameter(url);
//此处的url就是需要我们进行代码拆分的url


//
var str = 'https://www.baidu.com/s?wd=javascript&rsv_spt=1&ssp=1';
var questionIndex = str.indexOf('?');
str = str.substring(questionIndex+1);

var ary = str.split('&');
var obj ={};
for (var i = 0; i < ary.length; i++) {
    var curIndex = ary[i];
    var curAry = curIndex.split('='),
        key = curAry[0],
        value = curAry[1];
    obj[key]=value;
}
console.log(obj);
//输出的结果是{wd: "javascript", rsv_spt: "1", ssp: "1"}


