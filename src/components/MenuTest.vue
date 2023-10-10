<template>
    <ul>
        <li><router-link to="/">Services</router-link></li>
        <li><router-link to="/realisations">Réalisations</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li v-if="connected"><router-link to="/espace-pro">Espace Pro</router-link></li>
    </ul>
</template>

<script>
export default {
  name: 'MenuTest',
  props: {
    connected: Boolean
  }
}
</script>

<style scoped>
    ul{
        display: flex;
        justify-content: center;
        gap: 30px;
        position: fixed;
        top:0;
        left:0;
        width:100%;
        background: gainsboro;
        padding: 20px;
        margin: 0;
        list-style: none;
    }
</style>