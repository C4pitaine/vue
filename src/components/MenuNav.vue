<script>
import ConnectTop from './ConnectTop.vue'

export default {
  name: 'MenuNav',
  data(){
    return {
      connected: false
    }
  },
  methods: {
    changeConnect(state){
      this.connected = state
    }
  },
  components: {
    ConnectTop
  }
}
</script>

<template>
  <ul>
    <li><router-link to="/">Services</router-link></li>
    <li><router-link to="/realisations">Réalisations</router-link></li>
    <li><router-link to="/contact">Contact</router-link></li>
    <li v-if="connected"><router-link to="/espace-pro">Espace pro</router-link></li>
    <ConnectTop :connected="connected" :changeConnect="changeConnect"></ConnectTop>
  </ul>
</template>

<style scoped>
  ul{
    display: flex;
    justify-content: center;
    gap: 30px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: gainsboro;
    padding: 20px;
    margin: 0;
    list-style: none;
  }
</style>