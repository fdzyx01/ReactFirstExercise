const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(createProxyMiddleware('/Weathers',
        {
            target: "http://apis.juhe.cn/simpleWeather/query",
            changeOrigin:true,
            pathRewrite: {
                "^/Weathers": ""
            },
            "secure":false 	//如果访问的是https类的链接，就需要设置为true
        })),
    app.use(createProxyMiddleware('/Phones',
        {
            target: "http://apis.juhe.cn/mobile/get",
            changeOrigin:true,
            pathRewrite: {
                "^/Phones": ""
            },
            "secure":false 	
        }))
    app.use(createProxyMiddleware('/News',
        {
            target: "http://v.juhe.cn/toutiao/index",
            changeOrigin:true,
            pathRewrite: {
                "^/News": ""
            },
            "secure":false 	
        })),
    app.use(createProxyMiddleware('/Idioms',
        {
            target: "http://apis.juhe.cn/idiomJie/query",
            changeOrigin:true,
            pathRewrite: {
                "^/Idioms": ""
            },
            "secure":false
        }))
}