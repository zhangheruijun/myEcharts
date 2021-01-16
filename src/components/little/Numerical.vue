<template>
  <div class="tit">
    <div class="tit-title">
      <div class="t-outer">
        <div class="t-insiade"></div>
      </div>
      <span class="t-text">{{ title }}</span>
    </div>
    <div class="numerical">
      <span
        class="numerical-list"
        v-for="(item, index) in numericalList"
        :key="index"
        >{{ item }}</span
      >
      <span class="numerical-unit">{{ unit }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "numerical",
  data() {
    return {
      numericalList: [0, 0, 3, 4, 5, 6, 7],
    };
  },
  props: {
    title: {
      type: String,
      default: "a阿达萨达",
    },
    unit: {
      type: String,
      default: "张",
    },
  },
};
</script>
<style lang='less' scoped>
.tit {
  padding: 1vh 0 2vh 1.5vw;
  .tit-title {
    display: flex;
    align-items: center;
    .t-outer {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 0.5vw;
      height: 0.5vw;
      border: 1px solid #1de9b6;
      border-radius: 50%;
      .t-insiade {
        width: 60%;
        height: 60%;
        background: #1de9b6;
        border-radius: 50%;
      }
    }
    .t-text {
      padding-left: 0.2vw;
      font-size: 10px;
      color: #fff;
    }
  }
  .numerical {
    display: flex;
    padding-left: 5%;
    padding-top: 0.4vw;
    .numerical-list {
      margin-right: 0.2vw;
      text-align: center;
      line-height: 1.5vw;
      width: 1.2vw;
      height: 1.5vw;
      border: 1px solid #51636c;
      font-size: 1.5vw;
      font-weight: 600;
      color: #01629d;
    }
    .numerical-unit {
      padding-left: 0.1vw;
      align-self: flex-end;
      font-size: 0.8vw;
      color: #01629d;
    }
  }
}
</style>