<template>
  <div id="mySite" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const mySite = this.$echarts.init(document.getElementById("mySite"));
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "2%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#0093f4", //更改坐标轴颜色
            },
          },
        },
        yAxis: {
          type: "category",
          axisLabel: {
            show: true,
            color: "#fff", //更改坐标轴文字颜色
            fontSize: 14, //更改坐标轴文字大小
          },
          axisLine: {
            lineStyle: {
              color: "#0093f4", //更改坐标轴颜色
            },
          },
          data: [
            "北京市",
            "天津市",
            "上海市",
            "广州市",
            "深圳市",
            "辽林",
            "吉林",
            "黑龙江",
            "内蒙",
            "陕西省",
            "山西省",
            "河南省",
            "河北省",
            "安徽省",
            "江西省",
            "新疆",
            "青海",
            "甘肃",
            "西藏",
            "云南",
            "贵州",
          ],
        },
        series: [
          {
            type: "bar",
            itemStyle: {
              color: "#0093f4",
            },
            data: [
              450,
              360,
              752,
              120,
              230,
              320,
              310,
              210,
              360,
              250,
              450,
              360,
              752,
              120,
              230,
              320,
              310,
              210,
              360,
              250,
              230,
            ],
          },
        ],
      };
      mySite.setOption(option, true);
    },
  },
};
</script>
<style>
</style>