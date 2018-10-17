<template>
  <div class="login_box">
    <LoginHeader/>
    <router-view/>

  </div>
</template>

<script>
  import LoginHeader from './LoginHeader'
  export default {
    name: 'LoginBox',
    components: {
      LoginHeader
    }
  }
</script>

<style>
  .login_box{
    width: 100%;
    height: 300px;
    /*background-color: pink;*/
    position: absolute;
    top: 200px;
    /*border: 2px solid #333;*/
  }
</style>
