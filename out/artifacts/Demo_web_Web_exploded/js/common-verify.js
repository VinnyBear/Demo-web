$(function(){

    $("#verify_input").codeVerify({
        type : 1,
        width:'400px',
        height:'50px',
        fontSize:'30px',
        codeLength: 6,
        btnId: 'reg_btn',
        ready: function(){

        },
        success: function () {
            alert("验证匹配")
        },
        error:function () {
            alert("验证不匹配")
        }
    })


})