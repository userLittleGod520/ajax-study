// 将data对象 转换成 查询字符串
function resolveData(data){
    var arr = [];
    for (var k in data){
        var str = k + '=' + data[k];
        arr.push(str);
    }
    return arr.join('&');
}
// console.log( resolveData({name:'lishen',age:19}));

// 设置自定义函数
function itheima(options){
    var xhr = new XMLHttpRequest();
    var qs = resolveData(options.data);
    
    // 判断请求类型
    if (options.method.toUpperCase() ==='GET'){
        xhr.open(options.method,options.url + '?'+qs);
        xhr.send();
    }else if ( options.method.toUpperCase() === 'POST'){
        xhr.open(options.method,options.url);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(qs);
    }
    // xhr绑定 onreadystatechange事件
    xhr.onreadystatechange = function(){
        if ( xhr.readyState === 4 && xhr.status ===200){
            var result = JSON.parse(xhr.responseText);
            options.success(result);
        }
    }
}