<template>
    <ul>
        <li><a href="#">Services</a></li>
        <li><a href="#">Réalisations</a></li>
        <li><a href="#">Contact</a></li>
        <li v-if="connected"><a href="#">Espace pro</a></li>
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