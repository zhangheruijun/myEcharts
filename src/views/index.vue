<template>
  <div class="wrap">
    <section class="wrap-left">
      <div class="left-detection">
        <title-con title="检测识别概况" />
        <numerical title="检测总数" unit="张" />
        <div class="numer-echarts">
          <numerical title="U盘注册总数" unit="个" />
          <div class="numerech">
            <echarts-proportion
              class="numerech-online"
              :custAttr="onlineObject"
            />
            <echarts-proportion
              cust-id="myProportionOffLine"
              :custAttr="offlineObject"
            />
          </div>
        </div>
      </div>
      <div class="left-rules">
        <title-con title="违章概况" />
        <propor title="违章总数" />
        <propor title="今日违章数" />
      </div>
      <div class="left-early-warning">
        <title-con title="实施违章预警" />
        <div class="early-scroll">
          <h5 class="scroll-title">
            <span class="t-s">违章区域</span>
            <span class="t-s">检测内容</span>
            <span class="t-s">检测时间</span>
          </h5>
          <!-- <vue-seamless-scroll
            class="wps seamless-war"
            :data="scrollList"
            :class-option="optionSingleHeightTime"
          > -->
          <div class="wps seamless-war" ref="seamlessRef">
            <ul class="wrapper" :class="aum?'add-aum':''" :style="{transform: `translateY(-${aum?seamlessHeight:0}px)`}">
              <li
                v-for="item in scrollList"
                :key="item.id"
                class="wrapper-list"
              >
                <span class="content-span">{{ item.title }}</span>
                <span class="content-span">{{ item.content }}</span>
                <span class="content-span">{{ item.time }}</span>
              </li>
            </ul>
            </div>
          <!-- </vue-seamless-scroll> -->
        </div>
      </div>
    </section>
    <section class="wrap-right">
      <div class="right-main">
        <div class="main-map">
          <!-- <echarts-map-china /> -->
          <echarts-map-ch-run />
        </div>
        <div class="main-bar">
          <title-con title="各省违章情况" />
          <div class="ech">
            <echarts-site />
          </div>
        </div>
      </div>
      <div class="right-footer">
        <echarts-bar />
      </div>
    </section>
  </div>
</template>

<script>
// import EchartsMapChina from "@/components/echarts/EchartsMapChina.vue";
import EchartsMapChRun from '@/components/echarts/EchartsMapChRunInHole.vue'
import EchartsProportion from "@/components/echarts/EchartsProportion.vue";
import EchartsBar from "@/components/echarts/EchartsBar.vue";
import EchartsSite from "@/components/echarts/EchartsSite.vue";
import TitleCon from "@/components/little/TitleCon.vue";
import Propor from "@/components/little/Propor.vue";
import Numerical from "@/components/little/Numerical.vue";
// import vueSeamlessScroll from "vue-seamless-scroll";
// import BetterScroll from "better-scroll";
export default {
  name: "index",
  data() {
    return {
      onlineObject: {
        custId: "myProportionOnline",
        custClass: "#00cc00",
        status: "在线",
      },
      offlineObject: {
        custId: "myProportionOffLine",
        custClass: "#af5757",
        status: "离线",
      },
      scrollList: [],
      clientHeight: "",
      aum:false,
      seamlessHeight:''
    };
  },
  components: {
    // EchartsMapChina,
    EchartsMapChRun,
    EchartsProportion,
    EchartsBar,
    EchartsSite,
    TitleCon,
    Numerical,
    Propor,
    // vueSeamlessScroll,
  },
  computed: {
    optionSingleHeightTime() {
      return {
        singleHeight: (this.clientHeight / 100) * 4,
        waitTime: 2500,
      };
    },
  },
  mounted() {
    this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const linarr = Array.from({ length: 15 }, (item, index) => {
        return {
          id: index,
          title: `${index}四川省-成都市-武侯区`,
          content: "未带安全帽",
          time: "2020-01-03",
        };
      })
    const seamlessHeight = this.$refs.seamlessRef.getBoundingClientRect().height / 8;  
    this.seamlessHeight = seamlessHeight
    this.scrollList = linarr.slice(0,8)
    let num = 7
    setInterval(()=>{
      num++
      if(num==15){
        num = 0
      }
      if(this.scrollList.length>=8){
        this.scrollList.push(linarr[num])
        this.aum = true
        setTimeout(()=>{
          this.aum = false
          this.scrollList.shift()
        },650)
      }else{
        this.scrollList.push(linarr[num])
      }
    },2000)
  },
  methods: {},
};
</script>

<style lang='less' scoped>
.wrap {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-left: 0.5%;
  box-sizing: border-box;
  .wrap-left {
    display: flex;
    flex-direction: column;
    flex: 0 0 24.5%;
    width: 24.5%;
    .left-detection {
      .numer-echarts {
        position: relative;
        .numerech {
          display: flex;
          position: absolute;
          right: 0.5vw;
          top: 50%;
          transform: translateY(-50%);
          .numerech-online {
            margin-right: 1vw;
          }
        }
      }
    }
    .left-early-warning {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
      .early-scroll {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
        .scroll-title {
          display: flex;
          padding: 2vh 0;
          font-size: 0.8vw;
          color: #fff;
          .t-s {
            flex: 1;
            text-align: center;
          }
        }
        .wps {
          flex: 1;
          overflow: hidden;
          .wrapper {
            height: 100%;
            .wrapper-list {
              display: flex;
              // padding: 0.6vh 0;
              height: 12.5%;
              align-items: center;
              .content-span {
                flex: 1;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 0.7vw;
                color: #fff;
                text-align: center;
              }
            }
            &.add-aum{
              // transform: translateY(-37.47px);
              transition: all 0.8s;
            }
          }
        }
      }
    }
  }
  .wrap-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .right-main {
      flex: 1;
      display: flex;
      .main-map {
        width: 70%;
        height: 100%;
        overflow: hidden;
        background: yellow;
      }
      .main-bar {
        display: flex;
        flex-direction: column;
        flex: 1;
        .ech {
          flex: 1;
        }
      }
    }
    .right-footer {
      height: 16%;
    }
  }
}
</style>
