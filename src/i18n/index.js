/**
 * i18n多语言处理器
 */

//加载相关的components
import Vue from 'vue'
import config from '@/config'
import VueI18n from 'vue-i18n'

//声明全局的多语言配置
const locales = ['zh-CN', 'en-US']

Vue.use(VueI18n)
let messages = {}

locales.forEach(v => {
    messages[v] = require(`./${v}/index`).default
})

//声明全局的默认语言配置
const i18n = new VueI18n({
    locale: helper.ls.get('locale', config.locale),
    silentTranslationWarn: true,
    messages
})

export default i18n