# -fed-e-task-02-02

# 一、简答题

##  1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。

        1、初始化参数
        2、用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译
        3、编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
        4、根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表

##  2、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。

        loader是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中
        
        在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果

        loader开发思路：导出一个函数，该函数的输入为loader加载的资源内容，函数输出为资源处理结果，webpack会将loader的输出结果写入打包出的js中

        plugin开发思路：通过webpack钩子函数，往对应生命周期各个节点中挂载对应任务

# 二、编程题

## 1、使用 Webpack 实现 Vue 项目打包任务

    webpack.common.js中配置项目的通用配置，如entry/output/resolve.extensions(自动扩展后缀)/resolve.alias(引用地址缩写)
    同时将开发环境和生产环境都会用到的loader和plugin也添加在webpack.common.js中，
    除了学习视频中提到的loader之外，webpack.common.js中还用到了vue-style-loader来解析.vue后缀的文件，和postcss-loader来实现自动添加css前缀

    webpack.dev.js文件通过webpack-merge插件引入webpack.common.js，并添加开发环境配置，开发环境配置主要有以下几点：

        1 指定mode为'development'，devtool为inline-source-map
        2 publicPath指定为 '/'
        3 开启devServer并添加热更新功能

     webpack.prod.js文件通过webpack-merge插件引入webpack.common.js，并添加生产环境配置，生产环境配置主要有以下几点：

        1 指定mode为'production'，devtool为source-map
        2 publicPath指定为 './'
        3 添加  CleanWebpackPlugin 插件，用于每次build时删除上次构建的文件内容
        4 使用 OptimizeCssAssetsWebpackPlugin和TerserWebpackPlugin对css和js进行压缩

    在npm script中添加"serve": "webpack-dev-server --config webpack.dev.js"和
    "build": "webpack --config webpack.prod.js"两个命令
