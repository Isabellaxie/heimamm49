<template>
  <!-- 实际工作中,一般最外层 类名,为 组件名, 方便 -->
  <div class="login">
    <div class="text"></div>
    <!-- 没出来跳转, 没加路由前,是可以的 -->
    <!-- <el-button type="primary">主要按钮</el-button>
    <router-link to="/">跳转</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 方便查找, 在后台vue 里
  name: "login",
};
</script>

<style lang="less">
.login {
  .text {
    width: 200px;
    height: 200px;
    background-color: red;
  }
}
</style>
