// 引入express
const express = require('express');
// 创建应用对象
const app = express();
// 创建路由规则
app.all('/server',(request,response) =>{
    response.setHeader('Access-Control-Allow-Origin','*');
    // 添加响应数据
    const data = {
        name:'lishen'
    };
    // send() 方法只接受 字符串和数字 不接受复杂数据 要进行转换
    let str = JSON.stringify(data);
    response.send(str);
});

// 延迟响应
app.get('/delay',(request,response) =>{
    response.setHeader('Access-Control-Allow-Origin','*');
    // 添加响应数据
    const data = {
        name:'lishen'
    };
    // send() 方法只接受 字符串和数字 不接受复杂数据 要进行转换
    let str = JSON.stringify(data);
    // 添加延迟
    setTimeout(()=>{
        // 设置响应体
    response.send('延迟响应');
    },3000); // 3秒
});
// 添加监听事件
app.listen(8000,()=>{
    console.log('8000端口已经打开,正在监听中……');
})