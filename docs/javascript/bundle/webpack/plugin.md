# 使用示例

:::tip
**插件**
特定的插件具有特定的功能，webpack 插件是一个具有**apply**属性的对象，**apply**属性会被 webpack compiler 调用，并且 compiler 对象可以在整个编译的生命周期中访问，详情见自定义插件使用
<br />

**loader**
可以将文件的不同语言转为 javascript，例如 TypeScript，转为 javascript，将图片转为 base64。loader 甚至允许你在 javascript 文件中引入 css 文件
:::

### 官方插件/loader 的使用

- npm install html-webpack-plugins clean-webpack-plugin -D
- npm install style-loader css-loader sass-loader -D

```javascript
// webpack.config.js
//loader
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
```

### 自定义插件/loader 的使用

```javascript
//声明

// src/plugins/customPlugin.js
const pluginName = 'CustomPlugin';
export default function CustomPlugin(options) {
  this.options = options;
  apply(compiler){
      compiler.hooks.run.tap(pluginName, compiltion =>{
          console.log('build starting');
      })
  }
}
// src/plugins/custom-loader.js
export default function(content) {
  return content.replace(/console.log\([^\(]+)\)/g,'')　;
}

//webpack.config.js中使用
const CustomPlugin = require('src/plugins/customPlugin.js')
module.exports = {
    resolveLoader:{
        module:['src/plugins/custom-loader.js']
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:['custom-loader']
            }
        ]
    },
    plugins:[
        new CustomPlugin({
            options:{}
        })
    ]
}
```
