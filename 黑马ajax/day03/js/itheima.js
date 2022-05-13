function resolveData(data) {
    var arr = []
    for (var k in data) {
      var str = k + '=' + data[k]
      arr.push(str)
    }
  
    return arr.join('&')
  }

// var res = resolveData({name:'zs',age:20});
// console.log(res);

function itheima(options){
    var xhr = new XMLHttpRequest();
    // 把外界传递过来的参数对象 转换为 查询字符串  使用resolveData()函数
    var qs = resolveData(options.data);

     // 判断请求方式 
    if ( options.method.toUpperCase() === 'GET'){
        // 发起GET请求
        xhr.open(options.method,options.url + '?' + qs);
        xhr.send();
    }else if (options.method.toUpperCase() === 'POST'){
       // 发起 POST请求
       xhr.open(options.method,options.url);
       xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
       xhr.send(qs); 
    }
    // 监听一下 onreadystatechange 函数
    xhr.onreadystatechange = function(){
        if ( xhr.readyState === 4 && xhr.status ===200){
            var result = JSON.parse(xhr.responseText);
            options.success(result);
        }
    }
}