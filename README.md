# easy-webpack
webpack 的最简单使用

本文用到 webpack4，webpack 号称0配置，确实也是这样。我觉得他的零配置是因为带了默认配置。

1、新建一个空目录，只要新建 src/index.js，写上一些代码。在命令行工具执行 webpack，它就会打出 dist/main.js 的文件。是的，连本地安装 webpack 也不用（当然全局安装使用的）。

不过这时打出来的是 product 的 mode 方式，要想在 dist/main.js 里看到你的代码，用 webpack --mode development

```javascript
// src/index.js
function fn() {
    return 10086;
}
let a = fn();
console.log(a - 1);
console.log(a + 1);
```



2、开始吧，根目录下新建 webpack.config.js，配置上

```javascript
// webpack.config.js
const path = require('path');

function getCurPath(p) {
    return path.join(__dirname, p)
}

module.exports = {
    entry: getCurPath('src/js/index.js'),
    output: {
        path: getCurPath('dist'),
        filename: 'main.js'
    }
}
```

然后 webpack --mode development，也是打包出了： dist/main.js，所以这就是默认它们的默认配置吧。

3、为了方便，把打包命令放进 package.json

```json
{
  "scripts": {
  	"start": "webpack --mode development",
  }
}
```

要用这种方式，那就要在本地安装，不让 npm run start 会报错：npm i webpack webpack-cli -S

3、引入 html-webpack-plugin

 npm i html-webpack-plugin -S

```javascript
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getCurPath(p) {
    return path.join(__dirname, p)
}

module.exports = {
    entry: getCurPath('src/js/index.js'),
    output: {
        path: getCurPath('dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({})
    ]
}
```

