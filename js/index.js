/**
 * Created by Administrator on 2017/3/2.
 */
$(function(){

    //状态栏的左按钮
    var sideFlag = true;
    $(".showList-Btn").click(function(){
        if(sideFlag){
            $("#wrap").animate({left:250},500);
            $("#wrap>#main>.mask").show();
            sideFlag = false;
        }else {
            $("#wrap").animate({left:0},500);
            $("#wrap>#main>.mask").hide();
            sideFlag = true;
        }
    })


    /**主页轮播图*****/
    $.get({
        url:"http://czdm.ittun.com/api/getlunbo",
        success:function(result){
            var topSwiper = template("top-temp",{items:result});
            document.querySelector(".swiper-wrapper").innerHTML = topSwiper;
        },
        error:function(){
            console.log("失败");
        }
    });


    /***请求图片漫画的详情页********/

    function renderCartoon(dataNum){
        $.get({
            url:"http://czdm.ittun.com/api/gethometab/"+dataNum,
            success:function(result){
                console.log(result);
                var cartoonSort = template("cartoonItem",{cartoonItem:result});
                document.querySelector(".cartoon-list").innerHTML = cartoonSort;

            },
            error:function(){
                console.log("失败");
            }
        });
    }

    //将所有按钮的类名保存在一个数组里
    var aCartoonList = [".new-serialize",".new-end",".hot-serialize",".hot-end"];


    //利用for循环来给每一个按钮注册事件
    for (var i = 1; i <= aCartoonList.length; i++) {
        function outer(){
            var j = i;
            function inner(){
                renderCartoon(j);
                $(".cartoon-nav>li").eq(j-1).css("color","#f00").siblings().css("color","#000");
            }
            return inner;
        }
        var fn = outer();
        document.querySelector(aCartoonList[i-1]).onclick = fn;
    }

    //在页面加载完毕的时候首先显示 最新连载的
    renderCartoon(1);

    //侧边栏的按钮
    //最新连载 side-aboutUs side-theme
    $(".side-serialize").click(function(){
        window.location = "serialize.html";
    })

    //专题列表的按钮
    $(".side-theme").click(function(){
        window.location = "theme.html";
    })
})