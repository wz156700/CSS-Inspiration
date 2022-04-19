<template>
  <div class="containner">
    <div class="left">
      <h2>CSS Inspiration</h2>
      <ul>
        <li @click="test" :style="{ color: colorVal,borderRight:`1px solid ${colorVal}`}">
          <span>实现水平垂直居中最便捷的方法</span>
        </li>
        <li @click="test" :style="{ color: colorVal }">
          <span>实现水平垂直居中最便捷的方法</span>
        </li>
        

      </ul>
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "home",
  components: {},
  setup() {
    var colorVal = ref("black");
    return { colorVal };
  },
  methods: {
    test() {
      this.colorVal = "green";
    },
  },
};
</script>

<style lang="less" scoped>
.containner {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.left {
  width: 25rem;
  height: 100%;
  outline: 1px solid whitesmoke;
  overflow-y: auto;
}

.left h2 {
  width: 90%;
  margin: 1rem auto;
}

.right {
  width: calc(100% - 18.8rem);
  height: 100%;
  overflow-y: auto;
}

.left ul {
  width: 90%;
  height: calc(100% - 3.7rem);
  margin: 0 auto;
}

.left ul li {
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  line-height: 3rem;
  text-align: left;
  cursor: pointer;
  list-style: none;
}

.left ul li:hover {
  color: green !important;
}

.left ul li span {
  font-size: 0.95rem;
  line-height: 3rem;
  padding-left: 0.2rem;
  letter-spacing: 0.1rem;
}

// 美化滚动条

/* 滚动槽 */
.left::-webkit-scrollbar,.right::-webkit-scrollbar  {
    width: 0.2rem;
    height: 0.2rem;
}
.left::-webkit-scrollbar-track ,.right::-webkit-scrollbar-track{
    border-radius: 0.2rem;
    background: rgba(3, 163, 236, 0.06);
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.08);
}
/* 滚动条滑块 */
.left::-webkit-scrollbar-thumb ,.right::-webkit-scrollbar-thumb{
    border-radius: 3px;
    background: rgba(2, 67, 247, 0.12);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}
</style>
