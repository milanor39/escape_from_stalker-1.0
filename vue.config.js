const { defineConfig } = require('@vue/cli-service')
module.exports = {
    //webpack配置
    configureWebpack: {
        //關閉 webpack 的性能提示
        performance: {
            hints:false
        }
    },

    publicPath: './'
}
