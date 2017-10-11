/**
 * HTTP相关处理器
 * Created by AkyLau on 2017/10/11.
 */

// 加载相关的components

import Vue from 'vue'
import axios from 'axios'
import config from './config'

// 根据配置设置是否启用mock组件模拟接口数据
import mock from './mock'
if (!config.debug.mock) {
    mock.restore()
}

// 设置接口地址，超时，以及http请求头等相关信息
var http = axios.create({
    baseURL: config.api,
    timeout: 1000
    // headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
})

// 封装http请求处理，容错处理
http.interceptors.request.use(function (request) {
    return request
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

// 封装http请求响应处理，容错处理
http.interceptors.response.use(function (response) {
    const request = response.config
    //根据配置是否开启debug模式，打印http请求响应相关信息
    if (config.debug.http) {
        console.log(
            '>>>', request.method.toUpperCase(), request.url, request.params,
            '\n   ', response.status, response.data
        )
    }
    return response
}, function (error) {
    if (config.debug.http) {
        let { response, config: request } = error
        //如果有请求出错信息，直接打印输出错误信息
        if (request) {
            console.log(
                '>>>', request.method.toUpperCase(), request.url, request.params,
                '\n   ', response.status, response.data
            )
        }
    }
    // Do something with response error
    return Promise.reject(error)
})

Vue.prototype.$http = http
