$(function(){

    //初始化滑动&拼图的标志slideVerify
    $("#mpanel1").slideVerify({
        //滑动验证码type=1,拼图验证type=2
        type:1,

        //拼图验证码或选择验证码图片名称
        imgSize:{
            width:'400px',
            height:'200px',
        },

        //验证成功后的回调
        success:function(){
            alert("验证成功")
        }
    })

})