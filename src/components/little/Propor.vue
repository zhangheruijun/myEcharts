<template>
  <div class="tit">
    <div class="tit-title">
      <div class="t-outer">
        <div class="t-insiade"></div>
      </div>
      <span class="t-text">{{ title }}</span>
    </div>
    <section class="tit-custnum">
      <div class="t-num">
        <span class="n-num">45454</span>
        <span class="n-unit">张</span>
      </div>
      <div class="t-rightnum">
        <div class="tit-title">
          <div class="t-outer">
            <div class="t-insiade"></div>
          </div>
          <span class="t-text">累计违章最高区域：</span>
          <span class="t-cons">智慧工地01</span>
        </div>
        <div class="tit-title">
          <div class="t-outer">
            <div class="t-insiade"></div>
          </div>
          <span class="t-text">累计违章最高区域：</span>
          <span class="t-cons">智慧工地01</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "a阿达萨达",
    },
  },
};
</script>

<style lang='less' scoped>
.tit {
  padding: 1vh 0 2vh 1.5vw;
  height: 8vh;
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
  .tit-custnum {
    padding-left: 0.7vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .t-num {
      display: flex;
      align-items: center;
      // height: 6.5vh;
      .n-num {
        font-size: 1.4vw;
        font-weight: 600;
        color: #fff;
      }
      .n-unit {
        padding-left: 0.2vw;
        font-size: 0.8vw;
        align-self: flex-end;
        color: #44a8d9;
      }
    }
    .t-rightnum {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 100%;
    }
    .tit-title {
      .t-text {
        color: #44a8d9;
      }
      .t-cons {
        color: #fff;
        font-size: 1vw;
      }
    }
  }
}
</style>