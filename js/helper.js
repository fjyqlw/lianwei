function showByPwd(id) {
    var pwd=prompt("请输入密码");

    if ($.md5(pwd) == '0f89394c27cff6b22cfdf1470761e664') {
        $('#'+id).show();
    }
    
}