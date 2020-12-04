<template>
    <div class="login_body" id="app">
        <form>
        <div>
            <input type="email" class="login_text" placeholder="账号/手机号/邮箱" v-model="email" required>
        </div>
        <div>
            <input class="login_text" type="password" placeholder="请输入您的密码" v-model="pwd" required>
        </div>
        <div class="login_btn">
            <input type="submit" value="登录" @click="yanzheng">
        </div>
        </form>
        <div class="login_link">
            <a href="#">立即注册</a>
            <a href="#">找回密码</a>
        </div>
    </div>
</template>
<script>
export default {
    name:"Login",
    data() {
        return {
            pwd:'',
            email:''
        }
    }
    ,
      methods:{ 
        yanzheng:function(){
            if(this.email.length<=11||this.pwd==''){
                alert('表单格式不正确');
                return false;
            }else{
                alert('登录成功');
            }
        }
    },
  
}
  
</script>

<style scoped>
    #content .login_body{
        width: 100%
    }
    .login_body .login_text{
        width: 100%;
        height: 40px;
        border: none;
        border-bottom: 1px #ccc solid;
        margin:0 5px;
        outline: none;
    }
    .login_body .login_btn input{
        display: block;
        width: 100%;
        height: 50px;
        background: #e54847;
        border-radius: 3px;
        border: none;
        color: white;
    }
    .login_body .login_link{
        display: flex;
        justify-content: space-between;
    }
    .login_body .login_link a{
       text-decoration: none;
        margin: 0 5px;
        font-size: 12px;
        color: #e54847;
    }
</style>