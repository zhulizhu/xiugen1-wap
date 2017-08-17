$(".us").on("click", function () {
    console.log(123);
//        $("subform").submit();
});


//声明一个自定义的验证规则——cellphone
jQuery.validator.addMethod('cellphone', function (data) { //data参数是用户当前的输入值
    var reg = /^1\d{10}$/;
    var result = reg.test(data); //true/false
    return result;
});
//声明一个自定义的验证规则——regemoji
jQuery.validator.addMethod('regemoji', function (data) {
    var reg = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
    var result = !reg.test(data); //true/false
    return result;
});


$.validator.setDefaults({
    submitHandler: function (form) {
        form.submit();
    }
});


//为指定的表单调用输入验证
$('#subform').validate({
    //声明验证规则——对哪个字段要执行何种验证
    rules: {
        name: {
            required: true,
            regemoji: true
        },
        introduce: {
            required: true,
            regemoji: true
        },
        mobile: {
            cellphone: true
        },
        company: {
            required: true
        },
        email: {
            required: true,
            email: true
        }
    },
    //每个验证规则不满足时对应的警告消息
    messages: {
        name: {
            required: '用户名不能为空',
            regemoji: '请不要输入表情'
        },
        mobile: {
            cellphone: '手机号码格式有误'
        },
        company: {
            required: '请输入公司名称'
        },
        introduce: {
            required: '公司简介不能为空',
            regemoji: '请不要输入表情'
        },
        email: "请输入一个正确的邮箱"
    }
});