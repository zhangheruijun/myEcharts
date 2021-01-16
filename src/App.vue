<template>
  <div id="app">
    <nav class="nav">
      <img class="nav-img" src="./assets/ai.png" alt="" />
      <span class="nav-text">AI智能检测识别平台</span>
    </nav>
    <par-index class="content" />
  </div>
</template>

<script>
import parIndex from "@/views/index.vue";
export default {
  name: "App",
  components: { parIndex },
};
</script>

<style lang='less'>
blockquote,
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
input,
legend,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #013954;
  .nav {
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #e5ebee;
    box-sizing: border-box;
    .nav-img {
      width: 60px;
      height: 60px;
    }
    .nav-text {
      font-size: 16px;
      color: #e5ebee;
    }
  }
  .content {
    flex: 1;
  }
}
</style>
