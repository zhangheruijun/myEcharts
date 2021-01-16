<template>
  <div class="tit">
    <div class="tit-title">
      <img class="t-img" src="../../assets/ai.png" alt="" />
      <span class="t-text">{{ title }}</span>
    </div>
    <div class="tit-line">
      <span
        class="line-span"
        v-for="(item, index) in spanList"
        :key="index"
        :style="{ background: item }"
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "titleCon",
  data() {
    return {
      spanList: ["#fff", "#0167a7", "#00ccff", "#0167a7"],
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang='less' scoped>
.tit {
  padding-top: 1vh;
  .tit-title {
    display: flex;
    align-items: center;
    .t-img {
      width: 24px;
      height: 24px;
    }
    .t-text {
      padding-left: 0.2vw;
      font-size: 14px;
      color: #44a8d9;
    }
  }
  .tit-line {
    display: flex;
    padding-top: 0.5vh;
    .line-span {
      width: 2.2vw;
      height: 2px;
      margin-right: 0.3vw;
    }
  }
}
</style>