$(function(){
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()

    // 用户点击发送按钮时绑定鼠标点击事件
    $('#btnSend').on('click',function(){
      Text();
    });
    // 用户按回车返回用户信息
    function Text(){
      var text = $('#ipt').val().trim();
      if(text.length <= 0){
        return $('#ipt').val('');
      } 
      // 如果用户输入了内容，将内容追加到页面元素
      $('#talk_list').append('<li class="right_word"><img src="img/person02.png"/><span>'+text+'</span></li>');
      $('#ipt').focus().val('');
      resetui();
      // 发送请求
      getMsg();
    }

    // 发送请求获取机器人聊天信息
    function getMsg(text){
      $.ajax({
        method:'GET',
        url:'http://ajax.frontend.itheima.net:3006/api/robot',
        data:{
          spoken:text
        },
        success:function(res){
          // console.log(res); 
          if(res.message === 'success'){
            // 接收聊天信息
            var msg = res.data.info.text
            $('#talk_list').append('<li class="right_word"><img src="img/person02.png"/><span>'+msg+'</span></li>');
            $('#ipt').focus().val('');
            resetui();

            // 调用 getVoice 函数
            getVoice();
          }
        }
      })
    }

    // 将文字转换成语音进行播放
    function getVoice(text){
      $.ajax({
        method:'GET',
        url:'http://ajax.frontend.itheima.net:3006/api/synthesize',
        data:{
          text: text
        },
        success: function(res){
          console.log(res);
          // 播放语音
          $('#voice').attr('src',res.voiceUrl);
        }
      })
    }
    // 为文本框绑定keyup事件
    $('#ipt').on('keyup',function(e){
      // 判断键盘按下的ASCII码值
      if (e.keyCode === 13){
        // console.log('用户弹起了回车键');
        // 触发按下发送按键事件
        $('#btnSend').click();
      }
    })
  })