// 1、引入express
const express = require('express');

// 2、创建应用对象
const app = express();

// 3、创建路由规则

app.get('/server',(request,response) =>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('HELLLO EXPRESS');
});
app.post('/server',(request,response) =>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('HELLLO EXPRESS post');
});
// 4、监听端口服务
app.listen(8000,()=>{
    console.log('服务器8000端口一打开,正在监听');
})