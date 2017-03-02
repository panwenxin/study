/**
 * Created by Administrator on 2017/3/2.
 */
$(function(){
    $.get({
        url:"http://czdm.ittun.com/api/gettopics",
        success:function(result){
            console.log(result);
            var tempTheme = template("tempTheme",{items:result});
            console.log(tempTheme);
            $(".theme-list").html(tempTheme)
        },
        error:function(){
            console.log("失败");
        }
    })
})