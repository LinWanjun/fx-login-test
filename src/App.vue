<template>
  <div id="app">
    <img class="background" src="./assets/loginBackground.jpg">
    <Logo/>
    <LoginBox/>
    <FxFooter/>
  </div>
</template>

<script>
import Logo from './components/Logo.vue';
import FxFooter from './components/FxFooter';
import LoginBox from './components/LoginBox';

export default {
  name: 'App',
  components:{
    Logo,
    FxFooter,
    LoginBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;

  min-width: 320px;
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  position: relative;
}
#app img.background{
  width: 100%;
  height: 100%;
}
</style>
