<template>
  <div class="fx_logo">
    <img src="../assets/logo.png">
  </div>
</template>

<script>
  export default {
    name: 'Logo',
  }
</script>
<style>
  .fx_logo{
    width: 100%;
    height: 100px;
    /*background-color: pink;*/
    position: absolute;
    top: 80px;
  }
  .fx_logo img{
    width: 80%;
    position: absolute;
    left: 50%;
    margin-left: -40%;
  }
</style>
