<template>
  <div class="std_login" id="std_login">
    <form class="std_tab"
          @submit="checkForm"
          action=""
          method="post">

      <ul>
        <li>
          <select name="school" id="school">
            <option value="1">高校</option>
            <option value="2" selected="selected">10574&nbsp;华南师范大学</option>
          </select>
        </li>
        <li>
          <input v-model="stdAccount"
                 type="text"
                 placeholder="用户名/工号/学号"
                 id="account">
        </li>
        <li>
          <input v-model="stdPassword"
                 type="password"
                 placeholder="密码"
                 id="pass">
        </li>
      </ul>
      <a href="#" class="forget">忘记密码？</a>
      <input type="button" value="登  录" class="button_blue" id="button_one" />
      <a href="#" class="unify">使用统一身份认证登录</a>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'StdLogin',
    data () {
      return {
        stdAccount:null,
        stdPassword:null,
        errors: [],
      }
    },
    methods: {
      checkForm:function (e) {
        if (this.stdAccount && this.stdPassword) {
          return false;
        }

        this.errors = [];

        if (!this.stdAccount) {
          this.errors.push('Account required.');
        }
        if (!this.stdPassword) {
          this.errors.push('Password required.');
        }

        e.preventDefault();
      }
    }
  }
</script>

<style>
  .std_login{
    width: 100%;
    height: 250px;
    /*background-color: #1b6d85;*/
  }
  .std_login .std_tab{
    width: 65%;
    height: 100%;
    /*background-color: pink;*/
    margin: 0 auto;
    position: relative;
  }
  .std_login .std_tab li{
    width: 100%;
    height: 30px;
    margin-top: 20px;
    background-color: #dddddd;
  }
  .std_login .std_tab select{
    width: 100%;
    height: 32px;
    border-radius: 5px;
    border: solid 1px #999;
    box-shadow: 0 1px 2px 1px #e6e6e6;
    font-size: 13px;
    color: #333333;
    /*很关键：将默认的select选择框样式清除*/
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    padding-left: 10px;
  }
  .std_login .std_tab li input{
    width: 100%;
    height: 32px;
    border-radius: 5px;
    border: solid 1px #999;
    box-shadow: 0 1px 2px 1px #e6e6e6;
    font-size: 13px;
    color: #333333;
    padding-left: 10px;
  }
  .std_login .std_tab .forget{
    font-size: 10px;
    color: #ea8542;
    display: block;
    position: absolute;
    bottom: 94px;
    right: 0;
    text-decoration: none;
  }
  .std_login .std_tab .button_blue{
    width: 96%;
    font-size: 14px;
    color: #fff;
    background-color: #ea8542;
    height: 36px;
    border-radius: 5px;
    box-shadow: 0 1px 2px 1px #e6e6e6;
    position: absolute;
    bottom: 40px;
    left: 2%;
  }
  .std_login .std_tab .button_blue:active{
    color: #fad4c1;
    background-color: #df6b20;
  }
  .std_login .std_tab .unify{
    width: 120px;
    font-size: 12px;
    color: #2a488a;
    display: block;
    position: absolute;
    left: 50%;
    margin-left: -60px;
    bottom: 0;
    text-decoration-line: underline;
  }
</style>
