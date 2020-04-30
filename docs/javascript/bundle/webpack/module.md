# 模块

## 什么是 webpack 模块
*在模块化编程中，开发者将程序分解成离散功能块(discrete chunks of functionality)，并称之为<font color=#3eaf7c>模块</font>。*

对比 Node.js 模块，webpack 模块能够以各种方式表达它们的依赖关系，几个例子如下：

- ES2015 <font color=#f732de>import</font> 语句
- CommonJS <font color=#f732de>require()</font> 语句
- AMD <font color=#f732de>define</font> 和 <font color=#f732de>require</font> 语句
- css/sass/less 文件中的 <font color=#f732de>@import</font> 语句。
- 样式(url(...))或 HTML 文件中的图片链接(<font color=#f732de>image url </font>) 

## 使用方法

```javascript
//webpack.config.js
module.exports = {
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        preset:'babel-preset-env'
                    }
                }]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        esModule:false
                    }
                }]
            }
        ]
    }
}

```
