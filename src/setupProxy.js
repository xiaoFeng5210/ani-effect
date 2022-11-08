// 配置代理 - 用于联调
const { createProxyMiddleware } = require('http-proxy-middleware')
console.log('PROXY: ', process.env.PROXY_ENV)
module.exports = function (app) {
    if (process.env.PROXY_ENV === 'proxy') {
        app.use(
            createProxyMiddleware('/api', {
                target: 'http://localhost:8080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            })
        )
    }
}