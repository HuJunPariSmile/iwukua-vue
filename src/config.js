/**
 * 配置项
 * Created by AkyLau on 2017/10/11.
 */

// 声明全局访问地址
const baseUrl = 'http://localhost:8080'
// 声明全局相关配置项
const config = {
    locale: 'zh-US',                                            //多语言配置项 值(en-US, zh-CN)
    url: baseUrl,                                               //全局访问地址
    ajaxUploadUrl: `${baseUrl}/admin/api/upload`,               //全局文件上传路径
    debug: {                                                    //debug模式，支持mock模拟接口数据，http请求数据输出日志等
        mock: true,                                             //是否启用mock 值(true, false)
        http: false                                             //是否启用http请求数据输出日志 值(true, false)
    },
    api: `${baseUrl}/admin/api`                                 //全局api请求地址
    // locale: 'en', //en
    // api: 'http://192.168.1.108:3333/admin/api'
}

global.config = config

export default config
