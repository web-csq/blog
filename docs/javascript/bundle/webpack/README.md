## webpack 基本概念


::: tip
webpack是当下比较流行的一种前端资源打包/加载工具，它将根据对模块的依赖关系进行静态分析，然后将这些模块按照制定的规则生成相对应的静态资源。<br />
当webpack处理应用程序时，会递归的构建一个关系依赖图，其中包含程序需要的各个模块，然后将这个模块打包成一个或者多个bundle。
:::

::: warning
webpack:^4.0 新增了mode，告诉webpack相应模式的内置优化
:::
选项|描述
-|-
development| 会将process.env.NODE_ENV的值设置为development。启用NamedChunksPlugin和NamedModulePlugin。
production| 会将process.env.NODE_ENV的值设置为production。启用FlagDependencyUsagePlugin，FlagIncludedChunksPlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin，OccurrenceOrderPlugin，SideEffectsFlagPlugin 和 UglifyJsPlugin。

### 入口（entry）/ 输出（output）
**[入口](./entry.md)** ：指定打包的入口文件，即起点，从哪个文件开始打包,可指定一个文件，也可指定多个文件<br />
**[输出](./entry.md)** ：定义整个编译过程的终点整，个项目打包完成后资源存放位置 <br />

### 插件（plugin）/ loader
**[插件](./plugin.md)** ：插件是webpack的支柱功能，主要作用是在webpack打包的各个生命hook中处理打包事物<br />
**[loader](./plugin.md)** ：loader用于对模块代码进行转换，不同的规则配合不同的loader，相同的规则可以使用多个loader顺序执行task <br />




  