<template>
    <div>

        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="首页" name="first">
                <main-body></main-body>


            </el-tab-pane>
            <el-tab-pane label="图片描述" name="second">
                <image-caption/>

            </el-tab-pane>
            <el-tab-pane label="个人中心" name="third">
                <user-lists/>

            </el-tab-pane>

        </el-tabs>



    </div>


</template>

<script>



import MainBody from "@/components/MainBody.vue";
import UserLists from "@/components/UserLists.vue";
import ImageCaption from "@/components/ImageCaption.vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Caption",
    components: {ImageCaption, UserLists, MainBody, },

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
