<template>

  <!--      <router-link to="/">Home</router-link>-->
  <!--      <router-link to="/about">About</router-link>-->
  <!--      <router-link to="/" tag="button">Login</router-link>-->
  <!--      <router-link to="/register" tag="button">Register</router-link>-->


    <div id="app">
        <!--路由管道标签，任何符合某一路由(route)信息的组件都会在这个标签内展示出来 -->
     <RouterView/>
    </div>


</template>

<script>




export default {

    data() {
        return {}
    },
    name: 'app',

}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
