/**
 * Created by Administrator on 2017/3/2.
 */
$(function(){
    $.get({
        url:"http://czdm.ittun.com/api/getlianzai",
        success:function(result){
            console.log(result);
            var tempSerialize = template("tempSerialize",{items:result});
            $(".serialize-list").html(tempSerialize);
        },
        error:function(){
            console.log("Ê§°Ü");
        }
    })
})