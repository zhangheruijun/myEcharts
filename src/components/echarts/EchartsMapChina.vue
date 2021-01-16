<template>
  <div id="mapChart" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  name: "echarts-map-china",
  data() {
    return {};
  },
  mounted() {
    this.chinaMap();
  },
  methods: {
    chinaMap() {
      var points = [
        {
          value: [118.8062, 31.9208],
          itemStyle: { color: "red" },
          zhang: "我爱你",
          // name: "三大地方",
        },
        // { value: [127.9688, 45.368], itemStyle: { color: "#4fb6d2" } },
        // { value: [110.3467, 41.4899], itemStyle: { color: "#52b9c7" } },
        // { value: [125.8154, 44.2584], itemStyle: { color: "#5abead" } },
        // { value: [116.4551, 40.2539], itemStyle: { color: "#f34e2b" } },
        // { value: [123.1238, 42.1216], itemStyle: { color: "#f56321" } },
        // { value: [117.1246, 36.6711], itemStyle: { color: "#f56f1c" } },
        // { value: [103.8637, 36.0549], itemStyle: { color: "#f58414" } },
        // { value: [112.3352, 37.9413], itemStyle: { color: "#f58f0e" } },
        // { value: [109.1162, 34.2004], itemStyle: { color: "#f5a305" } },
        // { value: [86.9062, 44.1978], itemStyle: { color: "#e7ab0b" } },
        // { value: [106.3586, 38.1775], itemStyle: { color: "#dfae10" } },
        // { value: [101.4038, 36.8207], itemStyle: { color: "#d5b314" } },
        // { value: [103.9526, 30.7617], itemStyle: { color: "#c1bb1f" } },
        // { value: [108.384366, 30.439702], itemStyle: { color: "#b9be23" } },
        // { value: [113.0823, 28.2568], itemStyle: { color: "#a6c62c" } },
        // { value: [102.9199, 25.46639], itemStyle: { color: "#96cc34" } },
        // { value: [119.4543, 25.9222] },
      ];
      var myChart = this.$echarts.init(document.getElementById("mapChart"));
      myChart.showLoading();
      // let index = -1;
      // this.$echarts.registerMap("china", geoJson);
      myChart.hideLoading();
      myChart.setOption({
        backgroundColor: "#013954",
        tooltip: {
          trigger: "item",
          backgroundColor: "#ccc",
          borderWidth: "1",
          borderColor: "red",
          formatter: (p) => {
            let val = p.value;
            if (window.isNaN(val)) {
              val = 0;
            }
            // console.log(p.zhang);
            const a = `<div>
            <div>111</div>
            <div>${p?.data?.zhang + ":哈哈" ?? ""}</div>
            </div>`;
            return a;
          },
        },
        geo: {
          map: "china",
          aspectScale: 0.75, //长宽比
          zoom: 1.2,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "#09132c", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "blue", // 100% 处的颜色
                  },
                ],
                globalCoord: true, // 缺省为 false
              },
              shadowColor: "rgb(58,115,192)",
              shadowOffsetX: 10,
              shadowOffsetY: 11,
            },
            emphasis: {
              areaColor: "#2AB8FF",
              borderWidth: 0,
              color: "green",
              label: {
                show: false,
              },
            },
          },
          regions: [
            {
              name: "南海诸岛",
              itemStyle: {
                areaColor: "rgba(0, 10, 52, 1)",
                borderColor: "rgba(0, 10, 52, 1)",
                normal: {
                  opacity: 0,
                  label: {
                    show: false,
                    color: "#009cc9",
                  },
                },
              },
            },
          ],
        },
        series: [
          {
            type: "map",
            roam: false,
            map: "china",
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#1DE9B6",
                  fontSize: "1vw",
                  textAlign: "top",
                },
              },
              emphasis: {
                textStyle: {
                  color: "rgb(183,185,14)",
                },
              },
            },
            itemStyle: {
              normal: {
                borderColor: "rgb(147, 235, 248)",
                borderWidth: 1,
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#09132c", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#274d68", // 100% 处的颜色
                    },
                  ],
                  globalCoord: true, // 缺省为 false
                },
              },
              emphasis: {
                areaColor: "rgb(46,229,206)",
                //    shadowColor: 'rgb(12,25,50)',
                borderWidth: 0.1,
              },
            },
            zoom: 1.2,
            // map: "china", //使用
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            showEffectOn: "render",
            zlevel: 1,
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: "fill",
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "top",
                offset: [15, 0],
                color: "#1DE9B6",
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: "#1DE9B6",
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            symbolSize: 10,
            data: points,
          }, //地图线的动画效果
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: false,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow", //箭头图标
              symbolSize: 7, //图标大小
            },
            lineStyle: {
              normal: {
                color: "#1DE9B6",
                width: 0, //线条宽度
                opacity: 0.1, //尾迹线条透明度
                curveness: 0.3, //尾迹线条曲直度
              },
            },
            //   data: [
            //     {
            //       coords: [
            //         [118.8062, 31.9208],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#4ab2e5" },
            //     },
            //     {
            //       coords: [
            //         [127.9688, 45.368],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#4fb6d2" },
            //     },
            //     {
            //       coords: [
            //         [110.3467, 41.4899],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#52b9c7" },
            //     },
            //     {
            //       coords: [
            //         [125.8154, 44.2584],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#5abead" },
            //     },
            //     {
            //       coords: [
            //         [116.4551, 40.2539],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#f34e2b" },
            //     },
            //     {
            //       coords: [
            //         [123.1238, 42.1216],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#f56321" },
            //     },
            //     {
            //       coords: [
            //         [114.4995, 38.1006],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#f56f1c" },
            //     },
            //     {
            //       coords: [
            //         [117.4219, 39.4189],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#f58414" },
            //     },
            //     {
            //       coords: [
            //         [112.3352, 37.9413],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#f58f0e" },
            //     },
            //     {
            //       coords: [
            //         [109.1162, 34.2004],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#f5a305" },
            //     },
            //     {
            //       coords: [
            //         [103.5901, 36.3043],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#e7ab0b" },
            //     },
            //     {
            //       coords: [
            //         [106.3586, 38.1775],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#dfae10" },
            //     },
            //     {
            //       coords: [
            //         [101.4038, 36.8207],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#d5b314" },
            //     },
            //     {
            //       coords: [
            //         [103.9526, 30.7617],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#c1bb1f" },
            //     },
            //     {
            //       coords: [
            //         [108.384366, 30.439702],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#b9be23" },
            //     },
            //     {
            //       coords: [
            //         [113.0823, 28.2568],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#a6c62c" },
            //     },
            //     {
            //       coords: [
            //         [102.9199, 25.46639],
            //         [119.4543, 25.9222],
            //       ],
            //       lineStyle: { color: "#96cc34" },
            //     },
            //   ],
          },
        ],
      });
    },
  },
};
</script>

<style>
</style>
