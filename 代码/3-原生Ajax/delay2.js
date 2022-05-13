// 1、引入express
const express = require('express');
const app = express();
app.get('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        response.send('hello ajax');
    },3000)
});
app.listen(8000,()=>{
    console.log('8000端口已经开启,正在监听');
})