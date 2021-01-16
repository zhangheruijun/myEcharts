<template>
  <div>
    <div
      :id="custAttr.custId"
      :style="{ width: '3.125vw', height: '3.125vw' }"
    ></div>
    <div class="propor-text">在线</div>
  </div>
</template>
<script>
import "echarts-liquidfill/src/liquidFill.js";
export default {
  name: "echarts-proportion",
  data() {
    return {
      windowWidth: "",
    };
  },
  props: {
    custAttr: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  mounted() {
    this.windowWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    this.init();
  },
  methods: {
    init() {
      const myProportion = this.$echarts.init(
        document.getElementById(this.custAttr.custId)
      );
      myProportion.hideLoading();
      const option = {
        // backgroundColor: "#050038",
        title: {
          text: "",
          textStyle: {
            fontWeight: "normal",
            // fontSize: 25,
            color: "rgb(97, 142, 205)",
          },
        },
        series: [
          {
            type: "liquidFill",
            radius: "80%",
            center: ["50%", "50%"],
            data: [0.5, 0.5, 0.5], // data个数代表波浪数
            color: ["#3a98c5", "#3a98c5", "#3a98c5"],
            backgroundStyle: {
              borderWidth: 1,
              color: "rgb(255,0,255,0.1)",
            },
            label: {
              normal: {
                formatter: 100 + "%",
                textStyle: {
                  fontSize: this.windowWidth * 0.008,
                  color: "#fff",
                },
              },
            },
            outline: {
              show: false,
            },
          },
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["100%", "90%"],
            hoverAnimation: false,
            data: [
              {
                name: "",
                value: 90,
                labelLine: {
                  show: false,
                },
                itemStyle: {
                  color: this.custAttr.custClass,
                },
                emphasis: {
                  labelLine: {
                    show: false,
                  },
                  itemStyle: {
                    color: "#5886f0",
                  },
                },
              },
              {
                //画中间的图标
                name: "",
                value: 0,
                labelLine: {
                  show: false,
                },
                itemStyle: {
                  color: "#ffffff",
                  normal: {
                    color: "#5886f0",
                    borderColor: this.custAttr.custClass,
                    borderWidth: 1,
                    // borderRadius: '100%'
                  },
                },
                label: {
                  borderRadius: "100%",
                },
                emphasis: {
                  labelLine: {
                    show: false,
                  },
                  itemStyle: {
                    color: "#5886f0",
                  },
                },
              },
              {
                // 解决圆点过大后续部分显示明显的问题
                name: "",
                value: 0,
                labelLine: {
                  show: false,
                },
                itemStyle: {
                  color: "#5886f0",
                },
                emphasis: {
                  labelLine: {
                    show: false,
                  },
                  itemStyle: {
                    color: "#5886f0",
                  },
                },
              },
              {
                //画剩余的刻度圆环
                name: "",
                value: 10,
                itemStyle: {
                  color: "#3a98c5",
                },
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                emphasis: {
                  labelLine: {
                    show: false,
                  },
                  itemStyle: {
                    color: "#3a98c5",
                  },
                },
              },
            ],
          },
        ],
      };
      myProportion.setOption(option, true);
    },
  },
};
</script>
<style lang='less' scoped>
.propor-text {
  text-align: center;
  font-size: 0.5vw;
  color: #3a98c5;
  padding-top: 4px;
}
</style>