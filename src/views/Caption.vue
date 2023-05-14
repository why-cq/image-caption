<template>

    <el-container >
        <el-header id="el-header">
            <Header/>
        </el-header>
        <el-main id="el-main">
            <MainBody/>
        </el-main>
    </el-container>
</template>

<script>
import Header from "@/components/Header.vue";
import MainBody from "@/components/MainBody.vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Caption",
    components: {MainBody, Header}
}
</script>

<style scoped>
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

</style>
