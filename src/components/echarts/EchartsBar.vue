<template>
  <div id="myBar" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  mounted() {
    this.initBar([12, 23, 69, 556, 458, 445, 4555, 55]);
  },
  methods: {
    initBar() {
      // var xData = (function () {
      //   var data = [];
      //   for (var i = 1; i < 13; i++) {
      //     data.push(i);
      //   }
      //   return data;
      // })();
      var myBar = this.$echarts.init(document.getElementById("myBar"));
      let colors = ["#0066ff", "#4BC946", "#27D3E2", "#FF0014", "#FDA975"];
      let option = {
        backgroundColor: "#013954",
        color: colors,
        legend: {
          right: 30,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 15,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter() {
            // let name = `${nowMonth}${params[0].name}日`;
            // const yearData = (params[1].value * 100).toFixed(2);
            return `
                444445
               `;
          },
        },
        dataZoom: [
          {
            type: "inside",
            zoomOnMouseWheel: true, //如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。
            start: 0,
            end: 100,
          },
          {
            borderColor: "#1764c3",
            height: 10,
            start: 0,
            end: 100,
            bottom: "10px",
            textStyle: {
              color: "#fff",
            },
            fillerColor: "rgba(30,122,225, .6)", //
            // 背景样式
            dataBackground: {
              areaStyle: {
                color: "#022650",
              },
              lineStyle: {
                opacity: 0.8,
                color: "#1764cb",
              },
            },
            handleSize: "80%",
            handleColor: "#2a9afe",
            handleStyle: {
              borderColor: "#1764cb",
              shadowBlur: 2,
              shadowOffsetX: 1,
              shadowOffsetY: 1,
              shadowColor: "#2a9afe",
            },
          },
        ],
        grid: {
          left: "1%",
          right: "2%",
          top: "22px",
          bottom: "22px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisLabel: {
            color: "#fff",
          },
          axisLine: {
            //---坐标轴 轴线
            show: false,
          },
          axisTick: {
            //---坐标轴 刻度
            show: false,
          },
          splitLine: {
            //---grid 区域中的分隔线
            show: false,
          },
          splitArea: {
            //--网格区域
            show: false, //---是否显示，默认false
          },
          data: [
            327,
            1776,
            507,
            1200,
            800,
            482,
            204,
            1390,
            1001,
            951,
            381,
            220,
          ],
        },
        yAxis: {
          show: false,
          // type: "value",
          // axisLabel: {
          //   show: false,
          // },
          // axisLine: {
          //   //---坐标轴 轴线
          //   show: false,
          // },
          // axisTick: {
          //   //---坐标轴 刻度
          //   show: false,
          // },
          // splitLine: {
          //   //---grid 区域中的分隔线
          //   show: false,
          // },
          // splitArea: {
          //   //--网格区域
          //   show: false, //---是否显示，默认false
          // },
        },
        series: [
          {
            type: "bar",
            stack: "总量",
            barMaxWidth: 28,
            barGap: "10%",
            data: [
              327,
              1776,
              507,
              1200,
              800,
              482,
              204,
              1390,
              1001,
              951,
              381,
              220,
            ],
            itemStyle: {
              emphasis: {
                barBorderRadius: 5,
              },
              normal: {
                barBorderRadius: 5,
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(35, 157, 250, 1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(35, 157, 250, 0)", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          },
          {
            name: "",
            type: "line",
            smooth: true,
            data: [327, 1776, 507, 454, 21, 482, 24, 1390, 41, 951, 381, 220],
            itemStyle: {
              normal: {
                color: "#35c4e2",
                lineStyle: {
                  color: "#2fcaeb",
                  width: 2,
                  type: "dotted",
                },
                label: { show: true },
              },
            },
          },
        ],
      };
      myBar.setOption(option, true);
      // myBar.setOption(
      //   {
      //     backgroundColor: "#344b58",
      //     title: {
      //       // text: "本年商场顾客男女人数统计",
      //       // subtext: "BY Wang Dingding",
      //       // x: "4%",
      //       // textStyle: {
      //       //   color: "#fff",
      //       //   fontSize: "22",
      //       // },
      //       // subtextStyle: {
      //       //   color: "#90979c",
      //       //   fontSize: "16",
      //       // },
      //     },
      //     tooltip: {
      //       trigger: "axis",
      //       axisPointer: {
      //         type: "shadow",
      //         textStyle: {
      //           color: "#fff",
      //         },
      //       },
      //     },
      //     grid: {
      //       borderWidth: 0,
      //       top: 110,
      //       bottom: 95,
      //       textStyle: {
      //         color: "#fff",
      //       },
      //     },
      //     legend: {
      //       x: "4%",
      //       top: "8%",
      //       textStyle: {
      //         color: "#90979c",
      //       },
      //       // data: ["女", "男", "平均"],
      //     },

      //     calculable: true,
      //     xAxis: [
      //       {
      //         type: "category",
      //         axisLine: {
      //           lineStyle: {
      //             color: "#90979c",
      //           },
      //         },
      //         splitLine: {
      //           show: false,
      //         },
      //         axisTick: {
      //           show: false,
      //         },
      //         splitArea: {
      //           show: false,
      //         },
      //         axisLabel: {
      //           interval: 0,
      //         },
      //         data: xData,
      //       },
      //     ],
      //     yAxis: [
      //       {
      //         type: "value",
      //         splitLine: {
      //           show: false,
      //         },
      //         axisLine: {
      //           lineStyle: {
      //             color: "#90979c",
      //           },
      //         },
      //         axisTick: {
      //           show: false,
      //         },
      //         axisLabel: {
      //           interval: 0,
      //         },
      //         splitArea: {
      //           show: false,
      //         },
      //       },
      //     ],
      //     dataZoom: [
      //       {
      //         show: true,
      //         height: 30,
      //         xAxisIndex: [0],
      //         bottom: 30,
      //         start: 10,
      //         end: 80,
      //         handleIcon:
      //           "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
      //         handleSize: "110%",
      //         handleStyle: {
      //           color: "#d3dee5",
      //         },
      //         textStyle: {
      //           color: "#fff",
      //         },
      //         borderColor: "#90979c",
      //       },
      //       {
      //         type: "inside",
      //         show: true,
      //         height: 15,
      //         start: 1,
      //         end: 35,
      //       },
      //     ],
      //     series: [
      //       {
      //         name: "男",
      //         type: "bar",
      //         stack: "总量",
      //         itemStyle: {
      //           normal: {
      //             color: "rgba(0,191,183,1)",
      //             barBorderRadius: 0,
      //             label: {
      //               show: true,
      //               position: "inside",
      //               formatter: function (p) {
      //                 return p.value > 0 ? p.value : "";
      //               },
      //             },
      //           },
      //         },
      //         data: [
      //           327,
      //           1776,
      //           507,
      //           1200,
      //           800,
      //           482,
      //           204,
      //           1390,
      //           1001,
      //           951,
      //           381,
      //           220,
      //         ],
      //       },
      //       {
      //         name: "总数",
      //         type: "line",
      //         symbolSize: 10,
      //         symbol: "circle",
      //         itemStyle: {
      //           normal: {
      //             color: "rgba(252,230,48,1)",
      //             barBorderRadius: 0,
      //             label: {
      //               show: true,
      //               position: "top",
      //               formatter: function (p) {
      //                 return p.value > 0 ? p.value : "";
      //               },
      //             },
      //           },
      //         },
      //         data: [
      //           1036,
      //           3693,
      //           2962,
      //           3810,
      //           2519,
      //           1915,
      //           1748,
      //           4675,
      //           6209,
      //           4323,
      //           2865,
      //           4298,
      //         ],
      //       },
      //     ],
      //   },
      //   true
      // );
    },
  },
};
</script>
<style>
</style>