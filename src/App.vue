<template>
  <MenuTest :connected="connected"/>
  <ServicePage></ServicePage>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App" name="Alexandre"/>-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MenuTest from './components/MenuTest.vue'
import ServicePage from './pages/ServicePage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MenuTest,
    ServicePage
  },
  data(){
    return {
      connected : true
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul{
  li{
    a{
      color: black;
    }
  }
}
</style>
