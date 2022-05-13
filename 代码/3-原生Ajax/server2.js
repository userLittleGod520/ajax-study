const express = require('express');
const app = new express();
// all 可以接收所有的请求
app.all('/server',(requset,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应头 允许添加特殊响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {
        name:'lishen',
    }
// send() 只能接收 普通字符串 而data是对象要进行转换字符串
// 对象转换成字符串
let str = JSON.stringify(data);
    response.send(str);
});


app.listen(8000,()=>{
    console.log('8000端口已经开启，正在监听');
})