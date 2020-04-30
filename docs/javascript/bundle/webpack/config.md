# 常用配置

```javascript
//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin);
module.exports = {
    mode: 'development',
    entry:{
        main: './src/main.js'
    },
    output:{
        filename:'[name].[hash:8].js',
        path:path.resolve(__dirname,'./dist')
    },
    devtool:'cheap-module-source-map',
    devServer:{
        host:'localhost',
        port:9527,
        open:true,
        https:true,
        overlay:true,
        historyApiFallback:true,
        proxy:{
            '/proxyApi':'localhost:8080'
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',
                        exclude:/node_modules/,
                        options:{
                            preset:'babel-preset-env'
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            esModule:false
                        }
                    }
                ]
            },
            {
                test:/\.scss?$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    performance:{
        hints:'warning',
        maxEntrypointSize:400000,
        maxAssetSize: 100000,
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'./src')
        },
        extensions:['.js','.css','.scss','.vue'],
        mainFiles:['index','main'],
        modules:['node_modules']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    stats:{
        // 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出）
        chunks: true,

        // 将构建模块信息添加到 chunk 信息
        chunkModules: true,

        // 添加 --env information
        env: false,

        // 添加 compilation 的哈希值
        hash: true,

        // 显示哪个模块导出被用到
        usedExports: false,

        // 添加 webpack 版本信息
        version: true,

        // 添加时间信息
        timings: true,

        // 当文件大小超过 `performance.maxAssetSize` 时显示性能提示
        performance: true,
        
        // 添加构建模块信息
        modules: true,
    }
}

```
