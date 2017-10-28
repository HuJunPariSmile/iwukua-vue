<template>
    <v-app id="inspire">
        <v-navigation-drawer
            persistent
            permanent
            clipped
            v-model="drawer"
            app
            width="440"
        >
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="../../assets/images/logo.svg" />
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Iwukua</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-flex md12>
                <v-list
                    dense
                    class="grey lighten-4"
                >
                    <template v-for="(item, i) in items">
                        <v-layout
                            row
                            v-if="item.heading"
                            align-center
                            :key="i"
                        >
                            <v-flex xs6>
                                <v-subheader v-if="item.heading">
                                    {{ item.heading }}
                                </v-subheader>
                            </v-flex>
                            <v-flex xs6 class="text-xs-right">
                                <v-btn small flat>edit</v-btn>
                            </v-flex>
                        </v-layout>
                        <v-divider
                            dark
                            v-else-if="item.divider"
                            class="my-4"
                            :key="i"
                        ></v-divider>
                        <v-list-tile
                            :key="i"
                            v-else
                            @click=""
                            :to='item.href'
                        >
                            <v-list-tile-action>
                                <v-icon style="color:rgba(0,0,0,.54)">{{ item.icon }}</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <v-list-tile-title class="grey--text">
                                    {{ item.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-flex>
            <v-flex md12>
                <v-date-picker
                    v-model="picker2"
                    landscape
                    locale="zh-cn"
                >

                </v-date-picker>
            </v-flex>
        </v-navigation-drawer>
        <main>
            <v-content>
                <v-container fluid fill-height>
                    <v-layout
                        justify-center
                        align-center
                    >
                        <div class="auth-inner">
                            <div class="auth-brand">
                                <div class="auth-brand-inner">
                                    <div class="auth-logo"></div>
                                    <div class="auth-name"><h2 data-v-687e28c0="" style="color: #6480bf">Iwukua</h2></div>
                                </div>
                            </div>
                            <v-form class="auth-form form deprecated auth-form-invite register" v-model="valid" ref="form" dark lazy-validation>
                                <div class="invite-header guild">
                                    <h1 class="title">欢迎登录Iwukua</h1>
                                    <h2 class="old-h2">
                                        <v-avatar class="indigo lighten-2">
                                            <span class="white--text headline">I</span>
                                        </v-avatar>
                                        wukua
                                    </h2>
                                </div>
                                <v-text-field
                                    label="用户名"
                                    v-model="name"
                                    color="white"
                                    dark
                                    :rules="nameRules"
                                    :counter="10"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    color="white"
                                    dark
                                    name="input-10-1"
                                    label="密码"
                                    hint="At least 8 characters"
                                    v-model="password"
                                    min="8"
                                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                    :append-icon-cb="() => (e1 = !e1)"
                                    :type="e1 ? 'password' : 'text'"
                                    :rules="passwordRules"
                                    counter
                                ></v-text-field>
                                <v-checkbox
                                    label="Do you agree?"
                                    v-model="checkbox"
                                    color="white"
                                    dark
                                    :rules="[v => !!v || 'You must agree to continue!']"
                                    required
                                ></v-checkbox>
                                <v-btn @click="clear">重置</v-btn>
                                <v-btn
                                    @click="submit"
                                    :disabled="!valid"
                                    color="indigo accent-1"
                                    dark
                                >登录</v-btn>
                            </v-form>
                        </div>
                    </v-layout>
                </v-container>
            </v-content>
        </main>

    </v-app>
</template>

<style>
    .navigation-drawer {
        align-items: center;
        background-image: url(../../assets/images/login_l_left.png),url(../../assets/images/login_l_right.png);
        background-position: 0 100%,100% 100%;
        background-size: 127px 190px,97px 215px;
        bottom: 0;
        box-shadow: 2px 0 4px 0 rgba(0,0,0,.5);
        box-sizing: border-box;
        /*display: flex;*/
        justify-content: center;
        left: 0;
        padding: 10px;
        position: absolute;
        text-align: center;
        top: 0;
        width: 440px;
        z-index: 10;
        -webkit-box-align: center;
        -webkit-box-pack: center;

    }
    /**当前日期的颜色*/
    .picker__title {
        background: #7289da !important;
    }
    .btn--active:after {
        background-color: #7289da !important;
    }
    .content {
        padding-left: 390px;
        background: url(../../assets/images/bg.jpg) 0 0 repeat;
        background-color: #2f3136;
    }
    .auth-inner{
        width: 628px;
        height: 448px;
        display: flex;
        color: #fff;
        -webkit-box-direction: normal;
        -webkit-box-orient: horizontal;
        border-radius: 3px;
        flex-direction: row;
        overflow: hidden;
        position: relative;
    }
    .auth-inner .auth-brand {
        -ms-flex-align: center;
        -ms-flex-pack: center;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        align-items: center;
        background: hsla(0,0%,100%,.8);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        padding: 30px;
        text-align: center;
    }
    .auth-inner .auth-logo {
        background: url(../../assets/images/logo.svg);
        background-size: 168px 168px;
        height: 168px;
        width: 168px;
    }
    form.deprecated.auth-form {
        position: relative;
        background: rgba(40, 43, 48, 0.43);
        border-radius: 0;
        padding: 30px;
        width: 340px;
    }
</style>
<script>
    export default {
        data: () => ({
            drawer: true,
            picker2: null,
            valid: true,
            e1: true,
            items: [
                { icon: 'touch_app', text: '返回首页', 'href': '/', },
                { icon: 'lightbulb_outline', text: 'Reminders' },
                { divider: true },
                { icon: 'settings', text: 'Settings' },
                { icon: 'chat_bubble', text: 'Trash' },
                { icon: 'help', text: 'Help' },
                { icon: 'phonelink', text: 'App downloads' },
                { icon: 'keyboard', text: 'Keyboard shortcuts' }
            ],

            name: '',
            nameRules: [
                (v) => !!v || '用户名不能为空',
                (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
            ],
            password: '',
            passwordRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            checkbox: false
        }),
        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    // Native form submission is not yet supported
                    axios.post('/api/submit', {
                        name: this.name,
                        email: this.email,
                        checkbox: this.checkbox
                    })
                }
            },
            clear () {
                this.$refs.form.reset()
            }
        }
    }
</script>
