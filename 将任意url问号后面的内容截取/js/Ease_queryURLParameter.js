///使用正则的方式解决问题
String.prototype.myQueryURLParameter = function myQueryURLParameter() {
    var obj = {},
        reg = /([^=?&]+)=([^=?&]+)/g   //使用正则
    this.replace(reg, function () {
        var arg = arguments;
        obj[arg[1]] = arg[2];
    });
    return obj;
};
var str = 'https://www.baidu.com/s?wd=javascript&rsv_spt=1&ssp=1';
console.log(str.myQueryURLParameter());