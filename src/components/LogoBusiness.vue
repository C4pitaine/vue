<script>
export default {
  name: 'LogoBusiness',
  props: {
    business : String,
    changeName: Function

  }
}

</script>

<template>
    <div>{{business}} <button @click="changeName()">+</button></div>
</template>

<style scoped>
  
</style>