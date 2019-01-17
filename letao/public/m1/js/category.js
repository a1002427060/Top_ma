$(function(){
    //发送ajax请求渲染一级选项数据
    $.ajax({
        url:"/category/queryTopCategory",
        type:"get",
        success:function(res){
        var html = template("category-first",{res:res.rows})
        
        $(".links").html(html);
        //判断是否有数据进来
        if(res.rows.length){
            //如果有给第一个一级分类加上选中状态
            $(".links").find("a").eq(0).addClass("active");
        }
        var id = res.rows[0].id;
        getSecondCategory(id);
        }
    })
    // 通过点击一级分类加载二级分类数据
    $(".links").on("click","a",function(){
        var id = $(this).data("id");
        $(this).addClass("active").siblings().removeClass("active");
        getSecondCategory(id);
    })

    //获取二级分类数据 根据一级的id获取二级分类
    function getSecondCategory(id){
        $.ajax({
            url:" /category/querySecondCategory",
            type:"get",
            data:{
                id:id
            },
            success:function(response){
            var html= template("category-second",{response:response.rows})
               $(".brand-list").html(html);

            }
        })
    }
   
})