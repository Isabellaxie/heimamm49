<template>
  <div class="login">
    <div class="left">
      <div class="title">
        <img src="@/assets/img/login-logo.png" alt="" />
        <span class="titleName">黑马面面</span>
        <span class="titleLine">|</span>
        <span class="titleName2">用户登录</span>
      </div>
      <el-input
        v-model="userName"
        class="userName"
        placeholder="请输入内容"
        prefix-icon="el-icon-user"
      ></el-input>
      <el-input
        class="passWord"
        v-model="passWord"
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        :show-password="true"
      ></el-input>

      <el-row>
        <el-col :span="18" class="box">
          <el-input
            class="passWordImg"
            v-model="passWordImg"
            placeholder="请输入验证码"
            prefix-icon="el-icon-key"
          ></el-input>
        </el-col>

        <el-col :span="6" class="passImg"
          ><img src="@/assets/img/login-logo.png" alt="" />
        </el-col>
      </el-row>
    </div>

    <!-- <el-row>
           
            <el-col :span="4" class="box"></el-col>
        </el-row> -->

    <div class="right">
      <img src="../../assets/img/login_banner_ele.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  // 方便查找, 在后台vue 里
  name: "login",
  data() {
    return {
      userName: "",
      passWord: "",
      passWordImg: "",
    };
  },
};
</script>

<style lang="less">
.login {
  width: 1400px;
  height: 788px;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  //弹性布局
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);

    //内边距
    padding: 43px;
    .titleName {
      font-size: 24px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: rgba(12, 12, 12, 1);
      margin-left: 16px;
      margin-right: 14px;
    }

    .titleLine {
      font-size: 24px;
      color: #ccc;
      margin-right: 12px;
    }
    .titleName2 {
      font-size: 22px;
      font-family: PingFangSC;
      font-weight: 400;
      color: rgba(12, 12, 12, 1);
    }
    .userName,
    .passWord {
      width: 394px;
      height: 45px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(204, 207, 213, 1);
      border-radius: 4px;
      margin-top: 25px;
    }
    .passWordImg {
      margin-top: 25px;
    }
  }
}
</style>
