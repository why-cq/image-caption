<template>
  <div>
      <el-carousel indicator-position="outside" type="card" height="300px">
          <el-carousel-item v-for="item in images" :key="item.id">
             <img :src="item.src" class="tu">
          </el-carousel-item>
      </el-carousel>

  </div>

</template>

<script>
export default {
    name: "MainBody",
    data(){
        return{
            images:[
                {id:0, src: require("../images/1.jpg")},
                {id:1, src: require("../images/2.jpg")},
                {id:2, src: require("../images/3.jpg")},
            ]
        }
    }
}
</script>

<style scoped>


.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.tu{
    width: 100%;
    height: 100%;
}
</style>
