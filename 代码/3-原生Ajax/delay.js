 //1、引入express
 const express = require('express');
 var app = express();
 app.get('/jquery-get',(request,response) =>{
     response.setHeader('Access-Control-Allow-Origin','*');
     response.send('jquery发送Ajax -get');
});
app.post('/jquery-post',(request,response) =>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('jquery发送Ajax -post');
});
app.listen(8000,()=>{
    console.log('8000端口已经开启，监听中');
})