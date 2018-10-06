# ES6模块化

模块中可以包含自己定义的函数方法或对象，通过export导出，使用import导入。

*npm*是一个包管理工具，可以通过*npm*安装自己需要的包，也可以在*npm*发布自己创建的包。

目前浏览器无法直接解析导入的模块，所以需要使用*webpack*等打包工具将模块打包。

## Webpack及Babel
### 安装
* 首先在项目目录初始化`npm init`，生成package.json文件；
* 通过`npm install webpack@3.0.0 --save-dev`将*webpack*安装到`devDependencies`依赖中；
* 通过`npm install babel-core@6.25.0 babel-loader@7.1.1 babel-preset-es2015`安装*babel*来将ES6语法转化为ES5

### Webpack的配置
* 在根目录下新建`webpack.config.js`文件

```
const webpack = require('webpack');	//引入webpack插件

module.exports = {
  devtool: 'source-map',  //追踪报错信息
  entry: './app.js',	//项目入口
  output: {	//打包后的出口
    filename: './dist/bundle.js',	//打包后的储存位置
  },
  module: {	//指定相应文件的加载方式
    rules: [
      {
        test: /\.js$/,	//指定文件类型
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015'] },
          },
        ],
      },
    ],
  },
  plugins: [	//指定使用的插件
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
};
```

* 然后在package.json文件中的`scripts`中配置*webpack*命令`"build": "webpack --progress --watch"`

### Webpack使用
* 命令行运行`npm run build`来使用*webpack*打包项目
* 在根目录下就会生成`dist`目录以及打包好的文件`build.js`和`builld.js.map`两个文件

## 模块

### 创建模块
创建一个`config.js`文件后，如果希望在其他文件中使用这个文件中的内容，则需要将文件中的内容**导出**

**在一个模块中只能有一个`export default`**

```
// 默认导出
const apiKey = '123abc';
export default apiKey;

//命名导出
export const name = 'Sam';
export const age = '18';
```

### 使用模块
在`app.js`文件中引用`config.js`

```
//对于默认导出的内容，可以在导入时自定义新的命名
import APIKey from './config.js';

console.log(APIKey);

//命名导出的内容需要使用`{}`将内容括起来，且必须使用已经命名的变量名
//可以一次导入多个命名导出的内容
import { name, age } from './config.js';

console.log(name);
console.log(age);

```
