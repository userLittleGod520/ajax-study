// 1、引入express
var express =  require('express');
// 2、创建应用对象
var app  = express();
// 3、设置应用规则
// app.get('/jquery',(request,response)=>{
//      // 允许跨域
//     response.setHeader('Access-Control-Allow-Origin','*');
//     // 设置响应体
//     response.send('hello ajax');
// });
// app.all('/jquery',(request,response)=>{
//     // 允许跨域
//    response.setHeader('Access-Control-Allow-Origin','*');
//    // 设置响应体
// //    const data ={
// //         name:'lishen',
// //    };
//    response.send('hello ajax');
// });
app.all('/axios-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('hello ajax——axios');
});
app.all('/fetch-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
})

// 4、设置监听
app.listen(8000,()=>{
    console.log('8000端口正在启动中,监听中');
})