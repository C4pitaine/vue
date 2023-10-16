<script>
export default {
  name: 'ConnectTop',
  props: {
    connected: Boolean,
    changeConnect: Function
  },
  data(){
    return {
      connexion: false,
      user: "",
      pass: ""
    }
  },
  methods:{
    actionConnect(){
      this.connexion =!this.connexion
      this.changeConnect(true)
    },
    actionDisconnect(){
      this.changeConnect(false)
    }
  }
}
</script>

<template>
  <div class="connect">
    <div v-if="!connected">
      <button @click="connexion=!connexion">Connexion</button>
      <div v-if="connexion" class="overlay">
        <h1>Connexion</h1>
        <form @submit.prevent="actionConnect()">
          <label>Nom</label>
          <input type="text" v-model="user" />
          <label>Mot de passe</label>
          <input type="password" v-model="pass" />
          <button type="submit">Connexion</button>
          <button @click="connexion=false">Annuler</button>
        </form>
      </div>
    </div>
    <div v-else>
      <button @click="actionDisconnect()">Déconnexion</button>
    </div>
  </div>
</template>

<style scoped>
  .connect{
    position: relative;
  }
  button{
    cursor: pointer;
  }
  .overlay{
    position: absolute;
    top: 100%;
    right: 0;
    background: #ffffff;
    border: 1px solid #000000;
    padding: 10px;
  }
</style>