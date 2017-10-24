var ary =  [1,2,2,3,4,3,3,1,2,4,5],
    obj = {};
for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];
    if(typeof obj[cur] !== 'undefined'){
        ary[i] = ary[ary.length-1];
        ary.length--;
        i--;
    }else {
        obj[cur]=cur;
    }
}
console.log(ary);