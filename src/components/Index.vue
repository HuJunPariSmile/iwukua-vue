<template>
    <div class="index">
        <div class="top-right links">
            <v-btn class="primary white--text">Login</v-btn>
            <v-btn class="red white--text">Register</v-btn>
        </div>
        <h2>Iwukua</h2>
        <ul>
            <li><v-btn class="primary white--text" href="https://github.com/AkyLau/Pago">Pago</v-btn></li>
            <li><v-btn class="primary white--text" href="https://github.com/AkyLau/iwukua">iwukua</v-btn></li>
            <li><v-btn class="primary white--text" href="https://github.com/AkyLau/iwukua-vue">iwukua-vue</v-btn></li>
            <li><v-btn class="red white--text" href="https://github.com/AkyLau">My GitHub</v-btn></li>
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
