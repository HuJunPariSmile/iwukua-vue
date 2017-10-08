<template>
    <div class="index">
        <div class="top-right links">
            <router-link class="primary white--text btn btn--dark btn--raised" :to="{ name: 'Login' }">Login</router-link>
            <router-link class="red white--text btn btn--dark btn--raised" :to="{ name: 'Register' }">Register</router-link>
        </div>
        <img src="../../assets/images/001.png" width="400">
        <h2>Iwukua</h2>
        <ul>
            <li><a v-ripple class="primary white--text btn btn--dark btn--raised" href="https://github.com/AkyLau/Pago">Pago</a></li>
            <li><a v-ripple class="primary white--text btn btn--dark btn--raised" href="https://github.com/AkyLau/iwukua">iwukua</a></li>
            <li><a v-ripple class="primary white--text btn btn--dark btn--raised" href="https://github.com/AkyLau/iwukua-vue">iwukua-vue</a></li>
            <li><a v-ripple class="red white--text btn btn--dark btn--raised" href="https://github.com/AkyLau/">My GitHub</a></li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
</style>
