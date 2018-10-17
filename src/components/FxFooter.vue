<template>
  <div class="fx_footer">
    Copyright&nbsp;&copy;&nbsp;华南师范大学&nbsp;|&nbsp;Fx工作室.&nbsp;All&nbsp;rights&nbsp;reserved
  </div>
</template>

<script>
  export default {
    name: 'FxFooter',
  }
</script>

<style>
  .fx_footer{
    width: 100%;
    position: absolute;
    bottom: 0; /* 关键 */
    left:0; /* IE下一定要记得 */
    height: 20px;
    font-size: 10px;
    font-family: "Microsoft Yahei",Arial, Helvetica, sans-serif;
    text-align: center;
  }
</style>
