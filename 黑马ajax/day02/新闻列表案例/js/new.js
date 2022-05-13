$(function(){
    // 发送Ajax请求
    $.ajax({
        method:'GET',
        url:'http://www.liulongbin.top:3006/api/news',
        success:function(res){
            if (res.status !== 200) return alert('获取新闻列表失败!');
            console.log(res.data);
            // 把tags循环 成数组
            for(var i = 0; i < res.data.length; i++){
                // 把tags属性 从字符串改造成 字符串数组
                var row = res.data[i].tags = res.data[i].tags.split(',');
            }
            var htmlstr = template('moban',res);
            console.log(htmlstr);
            $('#news-list').html(htmlstr);
        }
    })

    // 使用过滤器处理时间格式
    template.defaults.imports.dataFormat = function(dbstr){
        var dt = new Date(dbstr);
        var y  = dt.getFullYear();
        var m  = dt.getMonth() + 1;
        var d  = dt.getDate();
        var h  = dt.getHours();
        var mm = dt.getMinutes();
        var s  = dt.getSeconds();
        return y + '-' + m + '-'+d+'  '+h+':'+mm+':'+s;
    }
})