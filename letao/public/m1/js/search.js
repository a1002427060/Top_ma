$(function(){
    /*
		实现用户点击搜索按钮跳转到搜索结果页
			
			1.给搜索按钮添加点击事件
			2.获取用户输入的搜索关键字
			3.判断用户是否输入了搜索关键字
			4.如果用户没有输入 阻止跳转 并且给出提示
			5.如果用户输入了 跳转到搜索结果页面 并且要将用户输入的关键字带到这个页面去

    */
   var keyArr = [];
    $("#search-btn").on("click",function(){
        // 或缺用户输入的关键词
        var keyword = $(this).siblings("input").val();
        //判断用户是否输入了关键字
        if(keyword){
            keyArr.push(keyword);
            //将关键字存储到本地缓存中
            localStorage.setItem("keyArr",JSON.stringify(keyArr));
            //将关键字带到搜索结果界面
            localStorage.herf = "search-result.html?keyword="+keyword;
        }else{
            alert("请输入关键字");
        }
    })
    /*
		实现历史关键字存储

			1.准备一个存储关键字的数组
			2.当用户点击搜索按钮的时候 将用户输入的关键字追加到数组中
			3.将数组存储在本地存储中
			4.在页面一上来的时候 判断本地存储中是否有已经存储的关键字
			5.将数据和HTML拼接 将数据展示在页面中

    */
   //1.判断是否有存储关键字
    if(localStorage.getItem("keyArr")){
        //将字符串转化维数组
        keyArr = JSON.parse(localStorage.getItem("keyArr"));
        //将缓存数据渲染到HTML界面
        var html = template("historyTpl",{result:keyArr})
        $("#history-box").html(html);
    }

    //实现清空历史功能
     $("#clearBtn").on("click",function(){
        $("#history-box").html("");
        localStorage.clear("keyArr");
     })
    
})