<template>
  <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">图片描述</el-menu-item>
          <el-menu-item index="3">个人中心</el-menu-item>

      </el-menu>

  </div>

</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
    data() {
        return {
            activeIndex: '1',

        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }


}
</script>

<style scoped>

</style>
