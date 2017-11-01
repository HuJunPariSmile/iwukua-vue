<template>
    <div class="index">
        <div class="top-right links">
            <!--<router-link class="primary white&#45;&#45;text btn btn&#45;&#45;dark btn&#45;&#45;raised" :to="{ name: 'Login' }">Login</router-link>-->
            <!--<router-link class="red white&#45;&#45;text btn btn&#45;&#45;dark btn&#45;&#45;raised" :to="{ name: 'Register' }">Register</router-link>-->
            <v-btn :to="{ name : 'Login' }" color="indigo lighten-1" dark class="white--text">Login</v-btn>
            <v-btn :to="{ name : 'Login' }" color="red" dark class="white--text">Register</v-btn>

        </div>
        <img src="../../assets/images/001.png" width="400">
        <h2>Iwukua</h2>
        <ul>
            <li><v-btn href="https://github.com/AkyLau/Pago" color="indigo lighten-1" dark class="white--text">Pago</v-btn></li>
            <li><v-btn href="https://github.com/AkyLau/iwukua" color="indigo lighten-1" dark class="white--text">Iwukua</v-btn></li>
            <li><v-btn href="https://github.com/AkyLau/iwukua-vue" color="indigo lighten-1" dark class="white--text">Iwukua-vue</v-btn></li>
            <li><v-btn href="https://github.com/AkyLau/" color="red" dark class="white--text">My Github</v-btn></li>
            <!--<li><a v-ripple class="primary white&#45;&#45;text btn btn&#45;&#45;dark btn&#45;&#45;raised" href="https://github.com/AkyLau/Pago">Pago</a></li>-->
            <!--<li><a v-ripple class="primary white&#45;&#45;text btn btn&#45;&#45;dark btn&#45;&#45;raised" href="https://github.com/AkyLau/iwukua">iwukua</a></li>-->
            <!--<li><a v-ripple class="primary white&#45;&#45;text btn btn&#45;&#45;dark btn&#45;&#45;raised" href="https://github.com/AkyLau/iwukua-vue">iwukua-vue</a></li>-->
            <!--<li><a v-ripple class="red white&#45;&#45;text btn btn&#45;&#45;dark btn&#45;&#45;raised" href="https://github.com/AkyLau/">My GitHub</a></li>-->

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
