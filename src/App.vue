<template>
  <MenuNav :connected="connexion" :changeConnect="actionConnect"></MenuNav>
  <router-view></router-view>
</template>

<script>
import MenuNav from './components/MenuNav.vue'

export default {
  name: 'App',
  components: {
    MenuNav
  },
  data() {
    return {
      connexion:false
    }
  },
  methods: {
    actionConnect(state){
      this.connexion = state
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

ul li a{
  color: black;
}
</style>
