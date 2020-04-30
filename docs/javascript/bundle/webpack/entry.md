# 参数类型

```javascript
//entry: String | Array<String> 
entry: './src/main.js'
entry: ['./src/main.js', './src/index.js']
```

### 对象语法
```javascript
//entry: {[entryChunkName: string]: string|Array<string>}
entry: {
    main: './src/main.js'
}
//output.path输入路径为绝对路径
output: {
    path:path.resolve(__dirname,'./dist'),
    filename: '[hash:8].[name].js'
}
```
### 多页面应用程序
:::tip
当打包多个应用时，指定多个程序入口即可
:::
```javascript
entry:{
    page1:'./src/page1/index.js',
    page2:'./src/page2/index.js',
    page3:'./src/page3/index.js'
}

```

### output其他参数列举
**output.hashDigest** <br />
生成hash时使用的编码方式，默认为'hex'，之处node.js所有[hash.dijest](https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding)的所有编码
<br />

**output.publicPath** <br />
默认值是一个空字符串 ""，该选项的值是以 runtime(运行时) 或 loader(载入时) 所创建的每个 URL 为前缀。因此，在多数情况下，此选项的值都会以/结束。<br />
webpack-dev-server 也会默认从 publicPath 为基准，使用它来决定在哪个目录下启用服务，来访问 webpack 输出的文件<br />

**output.sourceMapFilename** <br />
向磁盘写入一个文件，在devtool开启时使用，规定sourceMap文件的命名方式，默认使用 **[file].map**






