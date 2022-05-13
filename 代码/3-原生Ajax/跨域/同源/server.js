var express = require('express');
var app = express();
app.get('/server',(request,response) =>{
    // 响应一个页面
    response.sendFile(__dirname + '/index.html');  //响应一个页面
    // response.setHeader('Access-Control-Allow-origin','*');
    // response.send('hello ajax');
});
app.get('/data',(request,response) =>{
    response.send('用户数据');
})
app.listen(9000,()=>{
    console.log('服务已经开启……');
});