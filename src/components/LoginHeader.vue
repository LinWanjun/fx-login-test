<template>
  <div class="header">
    <div class="switch" id="switch" >
      <router-link to="/"
                   :class="{switch_std_focus:isStdLoginFocus,switch_std:isStdLogin}"
                   @click.native="handleStdChange"
                   id="switch_qlogin"
                   href="javascript:void(0);"
                   tabindex="7">学/工号登录</router-link>
      <router-link to="/EmailLogin"
                   :class="{switch_ema_focus:isEmailLoginFocus,switch_ema:isEmailLogin}"
                   @click.native="handleEmaChange"
                   id="switch_login"
                   href="javascript:void(0);"
                   tabindex="8">邮箱登录</router-link>
      <!--<div class="switch_bottom" id="switch_bottom" style="position: absolute; width: 40%; left: 0px;"></div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginHeader',
    data () {
      return {
        isStdLogin: false,
        isStdLoginFocus: true,
        isEmailLogin: true,
        isEmailLoginFocus: false,
        routeName:this.$route.name,
      }
    },
    methods: {
      handleStdChange () {
        this.isStdLogin = false;
        this.isStdLoginFocus = true;
        this.isEmailLogin = true;
        this.isEmailLoginFocus = false;
        console.log(this.routeName)
      },
      handleEmaChange () {
        this.isStdLogin = true;
        this.isStdLoginFocus = false;
        this.isEmailLogin = false;
        this.isEmailLoginFocus = true;
        console.log('123123');
      }
    }
  }
</script>

<style>
  .header{
    width: 100%;
    height: 50px;
    /*background-color: deepskyblue;*/
    position: relative;
    top: 0;
  }
  .header .switch {
    width: 60%;
    height:45px;
    position:absolute;
    left:50%;
    margin-left: -30%;
    /*background-color: #1b6d85;*/
    /*border: 1px solid rebeccapurple;*/
    bottom:0;
    font-size:14px;
  }
  .header .switch .switch_ema {
    width: 40%;
    text-align: center;
    color:#999;
    position: absolute;
    right: 0;
    display:inline-block;
    height:45px;
    line-height:45px;
    outline:none;
    /**hide-focus:expression(this.hideFocus=true);*/
  }
  .header .switch .switch_ema_focus {
    width: 40%;
    text-align: center;
    color:#18c869;
    position: absolute;
    right: 0;
    display:inline-block;
    height:45px;
    line-height:45px;
    outline:none;
    border-bottom:2px solid;
    border-bottom-color: #18c869;
    /**hide-focus:expression(this.hideFocus=true);*/
  }
  .header .switch #switch_qlogin {
    /*margin-right:85px;*/
  }
  .header .switch .switch_std_focus {
    width: 40%;
    text-align: center;
    color:#ea8542;
    display:inline-block;
    height:45px;
    line-height:45px;
    margin-left: 0;
    outline:none;
    border-bottom:2px solid;
    border-bottom-color: #ea8542;
    /**hide-focus:expression(this.hideFocus=true);*/
  }
  .header .switch .switch_std {
    width: 40%;
    text-align: center;
    color:#999;
    display:inline-block;
    height:45px;
    line-height:45px;
    margin-left: 0;
    outline:none;
    /**hide-focus:expression(this.hideFocus=true);*/
  }
  .header .switch .switch_ema:hover {
    color:#333;
    text-decoration:none;
  }
  .header .switch .switch_std:hover {
    color:#333;
    text-decoration:none;
  }
  #switch_bottom {
    position:absolute;
    bottom:-1px;_bottom:-2px;
    border-bottom:2px solid;
    border-bottom-color: #ea8542;
  }
</style>
