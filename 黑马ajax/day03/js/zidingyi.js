// 1、封装一个 将data对象转换 为 查询字符串  使用 循环 添加 '&' 拼接方式
//  例如 http://liulongbin.top/api/getbook?bookname='水浒传'&author ='施耐庵'
function resolveDate(data){
    var arr = [];
    for (var k in data){
        var str = k + '=' +data[k];
        arr.push(str);
    }
    return arr.join('&');
}
//  resolveDate({name:'lishen',age:19}); 已经设置好

function itheima(options){
    var xhr = new XMLHttpRequest();
    // 把外界传递过来的 参数对象  转换为 查询字符串
    var qs = resolveDate(options.data);

    // 判断请求类型 toUpperCase(); 将所有字符串 转换为大写
    if ( options.method.toUpperCase() === 'GET'){
        // 发起GET请求
        xhr.open(options.method,options.url + '?'+qs);
        xhr.send();
    }else if ( options.method.toUpperCase() === 'POST'){
        xhr.open(options.method,options.url);     
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlenconded');
        xhr.send(qs);
    }   
    // 绑定onreadystatechange事件
    xhr.onreadystatechange = function(res){
        if ( xhr.readyState === 4 && xhr.status === 200){
            var result = JSON.parse(xhr.responseText);
            options.success(result);
            
        }
    }
}