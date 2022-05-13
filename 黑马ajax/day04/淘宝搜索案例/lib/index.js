// 1、获取用户输入框里面的值
$(function(){
    // 输入框防抖功能
    // 定义延迟器的ID
    var timer = null;
    // 定义全局缓存对象
    var cacheObj = {};
    // 定义延迟器函数

    function debounceSearch(kw){
        timer = setTimeout(function(){
            getList(kw);
        },500)
    }
    $('#search').on('keyup',function(){
        clearTimeout(timer);
        var keywords = $(this).val().trim();
        if ( keywords.length <= 0){
            // return console.log('用户输入为0');
            // 当用户删除输入文字时，隐藏 渲染列表
            return $('#suggest-list').empty().hide();
        }
        // 先判断缓存中是否有数据 
        if (cacheObj[keywords]){
             return renderSuggerList(cacheObj[keywords])
        }
        debounceSearch(keywords);
    })
    // 2、封装 搜索建议列表
    function getList(kw){
        $.ajax({
            // 指定请求的URL地址 q是用户输入的关键字 
            url: 'https://suggest.taobao.com/sug?q=' + kw,
            // 指定要发起的JSON请求
            dataType:'jsonp',
            // 成功的回调函数
            success:function(res){
                console.log(res);
                renderSuggerList(res);
            }
        })
    }
    // 3、定义渲染UI结构
    function renderSuggerList(res){
        if (res.result.length <= 0 ){
            return $('#suggest-list').empty().hide();
        }
       var htmlstr =  template('tpl-suggesList',res);
       $('#suggest-list').html(htmlstr).show();
       // 缓存结果
      // 1、获取用户输入的内容当做键
      var k = $('#search').val().trim();
      // 2、需要将数据作为值 进行缓存
      cacheObj[k] =res;
      // 3、优先从缓存中获取搜索建议 监听文本框的keyup事件
    }
    //  4、 搜索关键词为空时 隐藏 搜索建议列表
    
})