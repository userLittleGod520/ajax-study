$(function(){
    function getCommentList(){
        $.ajax({
            method:'GET',
            url:'http://www.liulongbin.top:3006/api/cmtlist',
            data:{},
            success:function(res){
                console.log(res);
                if (res.status == 500) return alert('请求失败');
                var rows = [];
                $.each(res.data,function(i,item){
                var str = '<li class="list-group-item"><span class="badge" style="background-color:orange">评论时间:'+item.time+'</span><span class="badge" style="background-color:aqua"> 评论人'+item.username+'</span>'+item.content+'</li>';
                rows.push(str);
                })
                console.log(rows); // 已经循环添加好了
                $('#cmd-list').empty().append(rows.join('')); // 追加成功
            }
        })
    }
    getCommentList();
    function AddForm(){
        $('#formAdd').on('submit',function(e){
            // 阻止表单默认行为
            e.preventDefault();
          var text =  $(this).serialize();
        //   console.log(text);
        $.post('http://www.liulongbin.top:3006/api/addcmt',text,function(res){
            if (res.status !== 201){
                return alert('发表评论失败!'); 
            }
            getCommentList();
            // reset
            $('#formAdd')[0].reset();
        })
        })
    }
    AddForm();
})

