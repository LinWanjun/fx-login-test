<template>
  <div class="email_login" id="email_login">
    <form class="email_tab">
      <ul>
        <li>
          <input type="text" placeholder="邮箱" id="email">
        </li>
        <li>
          <input type="password" placeholder="密码" id="pass_ema">
        </li>
      </ul>
      <a href="#" class="forget">忘记密码？</a>
      <input type="button" value="登  录" class="button_blue" id="button_two"/>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'EmailLogin'
  }
</script>

<style>
  .email_login{
    /*display: none;*/
    width: 100%;
    height: 250px;
    /*background-color: #1b6d85;*/
    margin-top: 30px;
  }
  .email_login .email_tab{
    width: 65%;
    height: 100%;
    /*background-color: pink;*/
    margin: 20px auto 0;
    position: relative;
  }
  .email_login .email_tab li{
    width: 100%;
    height: 30px;
    margin-top: 20px;
    background-color: #dddddd;
  }
  .email_login .email_tab li input{
    width: 100%;
    height: 32px;
    border-radius: 5px;
    border: solid 1px #999;
    box-shadow: 0 1px 2px 1px #e6e6e6;
    font-size: 13px;
    color: #333333;
    padding-left: 10px;
  }
  .email_login .email_tab .forget{
    font-size: 10px;
    color: #ea8542;
    display: block;
    position: absolute;
    bottom: 150px;
    right: 0;
    text-decoration: none;
  }
  .email_login .email_tab .button_blue{
    width: 96%;
    font-size: 14px;
    color: #fff;
    background-color: #18c869;
    height: 36px;
    border-radius: 5px;
    box-shadow: 0 1px 2px 1px #e6e6e6;
    position: absolute;
    bottom: 100px;
    left: 2%;
  }
  .email_login .email_tab .button_blue:active{
    color: #c9fde1;
    background-color: #05ae53;
  }
</style>
