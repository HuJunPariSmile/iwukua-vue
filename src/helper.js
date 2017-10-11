/**
 * Helper处理器
 */

//加载相关的components
import Vue from 'vue'
import inflector from 'i'

//声明全局离线储存
const storage = window.localStorage
//声明Helper处理器
let helper = {}

// 字符串处理器
helper.i = inflector()

// localStorage离线存储处理器
helper.ls = {
    set (key, value) {
        value = JSON.stringify(value)
        storage.setItem(key, value)
    },
    get (key, defaultValue) {
        let value = storage.getItem(key, value)
        if (value === null || value === 'undefined' || value === '') {
            value = defaultValue
        } else {
            value = JSON.parse(value)
        }
        return value
    }
}

// 一个封装的helper ls本地离线存储处理器
helper.store = (key, value) => {
    if (arguments.length < 2) {
        return helper.ls.get(key)
    } else {
        return helper.ls.set(key, value)
    }
}

// 返回上一步处理器
Vue.directive('back', (el, binding) => {
    el.onclick = () => window.history.go(-1)
})

export default helper