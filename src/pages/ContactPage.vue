<template>
    <h1>Contact</h1>
    <form>
        <label>Nom</label>
        <input type="text" v-model="name">

        <label>Email</label>
        <input type="text" v-model="email">

        <label>Message</label>
        <textarea v-model="message"></textarea>
    </form>
</template>

<script>
export default {
    name: 'ContactPage',
    props: {
        
    },
    data() {
        return {
            name: "",
            email: "",
            message: "",
        }
    }
}
</script>

<style scoped>
    h1{
        margin-top: 200px;
        text-align: center;
    }
    form{
        width:50%;
        margin:auto;
        label{
            display: block;
            margin-top:15px;
        }
        input,textarea{
            display: block;
            width:100%;
            box-sizing: border-box;
            resize: none;
        }
        textarea{
            height:150px;
        }
    }
</style>