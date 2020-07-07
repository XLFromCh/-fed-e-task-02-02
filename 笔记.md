# -fed-e-task-02-02

模块化开发与规范化标准

# webpack4 内置插件

    webpack.DefinePlugin  定义node环境变量
        注入的是代码片段，因此最好用JSON.stringify()将定义的值包裹起来

    TreeShaking 在生产模式自动开启，可通过修改配置，在其他模式下也启用treeshaking

        optimization:{
            usedExports:true, 输出结果中只导出使用过的结果（标记未使用代码）
            minimize:true,代码压缩（删除未使用代码）
            concatenateModules:true,//尽可能将所有模块输出在一个函数中
            sideEffects:true, 一般用于npm包标记是否有副作用,若当前项目的package中添加了sideEffects:false，说明本项目无副作用，此时打包时会将未引用代码移除
        }

    MiniCssExtractPlugin 提取css
    optimizeCssAssetsWebpackPlugin  压缩css

    压缩类插件建议配置在 optimization.minimizer中，配置optimization.minimizer后需要手动再配置js压缩插件TerserWebpackPlugin

# rolluo 多用于开发类库或框架    

# parcel 完全零配置
